import { UpdateResult } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Posts } from './dto/create-post.entity';
import { PostsService } from './posts.service';
import { UpdatePostsDto } from './dto/update-post.entity';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    findAll(page?: number, limit?: number): Promise<Pagination<Posts>>;
    findOne(id: number): Promise<Posts>;
    create(createPost: Posts): Promise<Posts>;
    update(id: number, updatePostDTO: UpdatePostsDto): Promise<UpdateResult>;
    delete(id: number): Promise<void>;
}
