/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Songs } from './dto/songs-dto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
    constructor(@InjectRepository(Songs) private songRepository: Repository<Songs>) { }

    private readonly songs = []

    async create(createSong: Songs): Promise<Songs> {
        const song = new Songs();

        song.title = createSong.title;
        song.artists = createSong.artists;
        song.duration = createSong.duration;
        song.lyrics = createSong.lyrics;
        song.releasedDate = createSong.releasedDate;
        return await this.songRepository.save(song);
    }

    async findAll(): Promise<Songs[]> {
        return this.songRepository.find();
    }

    async findOne(id: number): Promise<Songs> {
        return this.songRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.songRepository.delete(id);

    }
}
