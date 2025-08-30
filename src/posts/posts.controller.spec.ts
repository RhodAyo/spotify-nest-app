/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { Posts } from './dto/create-post.entity';

describe('PostsController', () => {
  let controller: PostsController;
   let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
              database: 'post-app',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: '{DBPassword}',
              entities: [Posts],
              synchronize: true
      }),
      TypeOrmModule.forFeature([Posts]),
    ],
    providers: [PostsService],
  }).compile();

  service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
