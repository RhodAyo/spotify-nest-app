import { Repository, UpdateResult } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Posts } from './dto/create-post.entity';
import { UpdatePostsDto } from './dto/update-post.entity';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<Posts>);
    private readonly Posts;
    create(createPost: Posts): Promise<Posts>;
    findAll(): Promise<Posts[]>;
    findOne(id: number): Promise<Posts>;
    update(id: number, recordToUpdate: UpdatePostsDto): Promise<UpdateResult>;
    paginate(options: IPaginationOptions): Promise<Pagination<Posts>>;
    remove(id: number): Promise<void>;
}
