import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post) private postRepository: typeof Post,
        private filesService: FilesService
    ) {}

    async create(dto: CreatePostDto, image: any) {
        const filename = await this.filesService.createFile(image);
        const post = await this.postRepository.create({...dto, image: filename});
        return post;
    }
    
}
