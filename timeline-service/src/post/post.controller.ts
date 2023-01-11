import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {

    }

    @EventPattern('post_request_all')
    async all() {
        return this.postService.all();
    }

    @EventPattern('post_request_single')
    async getOne(data) {
        const post = await this.postService.get(data.id);
        return post;
    }

    @EventPattern('post_created')
    async create(post) {
        console.log("post_created", post);
        this.postService.create(post);        
    }

    @EventPattern('post_updated')
    async update(post) {
        console.log("post_updated", post);
        this.postService.update(post.id, post)
    }
    @EventPattern('post_deleted')
    async delete(id) {
        console.log("post_deleted", id);        
        this.postService.delete(id);
    }
}
