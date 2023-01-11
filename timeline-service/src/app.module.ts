import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [PostModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
