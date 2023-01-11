import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Totamealand1983',
      database: 'kwetter-timeline',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PostModule
  ],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule { }
