import { Resolver } from '@nestjs/graphql';
import { BlogService } from 'src/blog/blog.service';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Blog } from 'src/blog/blog.entity';
import { BlogInput } from 'src/blog/dto/create-blog.input';

    
@Resolver((of) => Blog)
export class ResolverGqLResolver {
    constructor(private blogService: BlogService) {}

    @Query((type) => [Blog])
    async getAllBlogs() {
      return this.blogService.getAll();
    }

    @Mutation((returns) => Blog)
    createBlog(@Args('blogInput') blogInput: BlogInput): Promise<Blog> {
      return this.blogService.createBlog(blogInput);
    }
}
