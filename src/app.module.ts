/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { DataSource } from 'typeorm';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts/dto/create-post.entity';

@Module({
  imports: [PostsModule, TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'post-app',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '{DBPassword}',
      entities: [Posts],
      synchronize: true
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {
    console.log(dataSource.driver.database);
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

}

