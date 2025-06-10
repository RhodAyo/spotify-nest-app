/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Songs } from './dto/songs-dto.entity';

@Injectable()
export class SongsService {

    private readonly songs = []

    create(song: Songs) {
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        return this.songs;
    }
}
