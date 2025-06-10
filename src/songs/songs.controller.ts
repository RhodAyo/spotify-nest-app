/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Songs } from './dto/songs-dto.entity';

@Controller('songs')
export class SongsController {

    constructor(private songService: SongsService) { }
    @Get()
    findAll() {
        try {
            return this.songService.findAll();
        }
        catch (err) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        return `Found song based on ${typeof id}`;
    }

    @Post()
    create(@Body() createSong: Songs) {
        return this.songService.create(createSong);
    }

    @Put(':id')
    UpdateOne() {
        return 'Updated song based on ID';
    }

    @Delete(':id')
    deleteOne() {
        return 'Song deleted based on ID';
    }
}
