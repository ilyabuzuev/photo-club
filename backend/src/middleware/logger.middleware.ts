import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      const userId = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_SECRET'),
      });

      const user = await this.prismaService.user.findUnique({
        where: { id: userId },
        select: { id: true, firstname: true, lastname: true, email: true },
      });

      req.body = user;

      next();
    } catch (error) {
      console.log(error);

      throw new HttpException(
        'Произошла какая-то неполадка в middleware',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
