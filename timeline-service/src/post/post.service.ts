import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private readonly PostRepository: Repository<Post>
    ){
    }

async all(): Promise<Post[]> {
    return this.PostRepository.find();
}

async create(data): Promise<Post>{
    console.log("post created data", data);
    
    return this.PostRepository.save(data);
}

async get(id: number): Promise<Post> {
    const post = await this.PostRepository.findOne({
        where: {id},
    });
    return post;
}

async update(id: number, data): Promise<any>{
    const post = await this.PostRepository.findOne({
        where: {id}, 
    });
    console.log("updated post", post);
    
    return this.PostRepository.update(post.service_id, data);
}

async delete(id: number): Promise<any> {
    const post = await this.PostRepository.findOne({
        where: {id}, 
    });
    return this.PostRepository.delete(post.service_id);
}

}
