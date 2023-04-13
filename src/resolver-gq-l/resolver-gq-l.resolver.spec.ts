import { Test, TestingModule } from '@nestjs/testing';
import { ResolverGqLResolver } from './resolver-gq-l.resolver';

describe('ResolverGqLResolver', () => {
  let resolver: ResolverGqLResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResolverGqLResolver],
    }).compile();

    resolver = module.get<ResolverGqLResolver>(ResolverGqLResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
