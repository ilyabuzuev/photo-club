import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaService } from './prisma/prisma.service';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('api/user/all', 'api/user/current');
  }
}
