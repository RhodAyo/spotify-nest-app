/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Songs } from './dto/songs-dto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Songs])],
  controllers: [SongsController],
  providers: [SongsService]
})
export class SongsModule { }
