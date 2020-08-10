import { UserTokenInterceptor } from './user-token.interceptor';

describe('UserTokenInterceptor', () => {
  it('should be defined', () => {
    expect(new UserTokenInterceptor()).toBeDefined();
  });
});
