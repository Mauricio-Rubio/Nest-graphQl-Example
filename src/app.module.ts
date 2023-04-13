import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BlogModule } from './blog/blog.module';
import { ResolverGqLResolver } from './resolver-gq-l/resolver-gq-l.resolver';

@Module({
  imports: [ GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql'
  }),
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: ['dist/**/*.model.js'],
    synchronize: true,
  }),
  BlogModule,],
  controllers: [AppController],
  providers: [AppService, ResolverGqLResolver],
})
export class AppModule {}
