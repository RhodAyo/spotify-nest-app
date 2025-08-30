/* eslint-disable prettier/prettier */
import { Body, Controller, DefaultValuePipe, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Posts } from './dto/create-post.entity';
import { PostsService } from './posts.service';
import { UpdatePostsDto } from './dto/update-post.entity';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) { }
    @Get()
    findAll(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 6): Promise<Pagination<Posts>> {
        limit = limit > 100 ? 100 : limit;
        return this.postService.paginate({
            page, limit,
        });
    }

    @Get('getPost/:id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<Posts> {
        return this.postService.findOne(id);
    }

    @Post()
    create(@Body() createPost: Posts): Promise<Posts> {
        return this.postService.create(createPost);
    }

    @Put('updatePost/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatePostDTO: UpdatePostsDto,): Promise<UpdateResult> {
        return this.postService.update(id, updatePostDTO);
    }

    @Delete('deletePost/:id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.postService.remove(id);
    }

}