/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Songs } from 'src/songs/dto/songs-dto.entity';
import { User } from 'src/user/user.entity';
import { PlaylistController } from './playlist.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Playlist, Songs, User])],
    controllers: [PlaylistController],
    // providers: [PlaylistService]
})
export class PlaylistModule { }
