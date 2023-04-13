import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  providers: [BlogService]
})
export class BlogModule {}
