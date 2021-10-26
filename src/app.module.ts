import { AuthModule } from '@modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'snake-naming.strategy';

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
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      subscribers: ['dist/**/*.subscriber{.ts,.js}'],
      migrations: ['dist/databases/migrations/**/*{.ts,.js}'],
      logging: true,
      migrationsTableName: '__migrations',
      namingStrategy: new SnakeNamingStrategy(),
    }),
    AuthModule,
  ],
})
export class AppModule {}
