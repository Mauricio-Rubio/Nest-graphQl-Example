import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [ GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql'
  }),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'tester',
    database: 'test',
    entities: ['dist/**/*.model.js'],
    synchronize: false,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}