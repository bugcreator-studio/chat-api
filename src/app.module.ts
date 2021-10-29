import { AuthModule } from '@modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'snake-naming.strategy';
import { UserModule } from './modules/user/user.module';
import * as dotenv from 'dotenv';
import { FirebaseAdminService } from '@services/firebase.service';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: false,
      extra: { charset: 'utf8mb4_unicode_ci' },
      entities: ['dist/**/*.entity{.ts,.js}'],
      subscribers: ['dist/**/*.subscriber{.ts,.js}'],
      migrations: ['dist/databases/migrations/**/*{.ts,.js}'],
      logging: true,
      migrationsTableName: '__migrations',
      namingStrategy: new SnakeNamingStrategy(),
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
