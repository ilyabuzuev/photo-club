import * as bcrypt from 'bcrypt';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUser } from './interfaces/IUser';
// import { LoginUserDTO } from './dto/LoginUserDTO';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async create(user: Prisma.UserCreateInput): Promise<IUser> {
    // ): Promise<void> {
    const count = await this.prisma.user.count({
      where: { email: user.email },
    });

    const isUserExist = count > 0;

    if (isUserExist) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const salt = await bcrypt.genSalt(10);

    const createdUser = await this.prisma.user.create({
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: await bcrypt.hash(user.password, salt),
      },
    });

    const secret = this.configService.get('JWT_SECRET');

    if (createdUser && secret) {
      return {
        id: createdUser.id,
        firstname: createdUser.firstname,
        lastname: createdUser.lastname,
        email: createdUser.email,
        token: await this.jwtService.signAsync(createdUser.id, {
          secret: secret,
        }),
      };
    } else {
      throw new HttpException(
        'Не удалось создать пользователя',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async login(
    user: Pick<Prisma.UserCreateInput, 'email' | 'password'>,
  ): Promise<IUser> {
    const foundedUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    const isPasswordCorrect =
      foundedUser &&
      (await bcrypt.compare(user.password, foundedUser.password));

    if (!isPasswordCorrect) {
      throw new HttpException(
        'Неверный email или пароль',
        HttpStatus.BAD_REQUEST,
      );
    }

    const secret = this.configService.get('JWT_SECRET');

    if (!secret) {
      throw new HttpException(
        'Походу сервак наебнулся',
        HttpStatus.BAD_GATEWAY,
      );
    }

    return {
      id: foundedUser.id,
      email: foundedUser.email,
      firstname: foundedUser.firstname,
      lastname: foundedUser.lastname,
      token: await this.jwtService.signAsync(foundedUser.id, {
        secret: secret,
      }),
    };
  }

  async getById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { id: true, firstname: true, lastname: true, email: true },
    });
  }

  async getAll() {
    return this.prisma.user.findMany({
      select: { id: true, firstname: true, lastname: true, email: true },
    });
  }

  async getCurrentUser(user): Promise<IUser> {
    return user;
  }
}
