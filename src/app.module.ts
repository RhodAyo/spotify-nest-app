/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { User } from './user/user.entity';
import { Songs } from './songs/dto/songs-dto.entity';
import { Playlist } from './playlists/playlist.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [SongsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'spotify-clone',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'rhodayo10.',
      entities: [Songs, User, Playlist],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {

    console.log(dataSource.driver.database);

  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    // consumer.apply(LoggerMiddleware).forRoutes({path:'songs', method: RequestMethod.POST})
  }

}