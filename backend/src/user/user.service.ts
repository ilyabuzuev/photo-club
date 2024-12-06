import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async create(user: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: user,
    });
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
}
