/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';
import { Posts } from './dto/create-post.entity';
import { UpdatePostsDto } from './dto/update-post.entity';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private postRepository: Repository<Posts>) { }

    private readonly Posts = []

    async create(createPost: Posts): Promise<Posts> {
        const post = new Posts();

        post.author = createPost.author;
        post.date = createPost.date;
        post.title = createPost.title;
        post.description = createPost.description;
        post.image = createPost.image;
        post.views = createPost.views;
        post.likes = createPost.likes;
        post.comments = createPost.comments;
        post.readMore = createPost.readMore;

        return await this.postRepository.save(post);
    }

    async findAll(): Promise<Posts[]> {
        return this.postRepository.find();
    }

    async findOne(id: number): Promise<Posts> {
        return this.postRepository.findOneBy({ id });
    }
    async update(id: number, recordToUpdate: UpdatePostsDto): Promise<UpdateResult> {
        return this.postRepository.update(id, recordToUpdate);
    }

    async paginate(options: IPaginationOptions): Promise<Pagination<Posts>> {
        return paginate<Posts>(this.postRepository, options);
    }

    async remove(id: number) {
        await this.postRepository.delete(id);
    }
}
