/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Songs } from './dto/songs-dto.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSongDto } from './dto/updatesong.entity';

@Controller('songs')
export class SongsController {

    constructor(private songService: SongsService) { }
    @Get()
    findAll(): Promise<Songs[]> {
        try {
            return this.songService.findAll();
        }
        catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<Songs> {
        return this.songService.findOne(id);
    }

    @Post()
    create(@Body() createSong: Songs): Promise<Songs> {
        return this.songService.create(createSong);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateSongDTO: UpdateSongDto,): Promise<UpdateResult> {
        return this.songService.update(id, updateSongDTO);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.songService.remove(id);
    }
}