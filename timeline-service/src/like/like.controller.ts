import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
    constructor(private likeService: LikeService) {

    }

    @EventPattern('like_request_all')
    async all() {
        return this.likeService.all();
    }

    @EventPattern('like_request_single')
    async getOne(data) {
        const post = await this.likeService.get(data.id);
        return post;
    }

    @EventPattern('like_created')
    async create(post) {
        console.log("like_created", post);
        this.likeService.create(post);        
    }

    @EventPattern('like_updated')
    async update(post) {
        console.log("like_updated", post);
        this.likeService.update(post.id, post)
    }
    @EventPattern('like_deleted')
    async delete(id) {
        console.log("post_deleted", id);        
        this.likeService.delete(id);
    }
}
