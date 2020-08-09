import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { ProfileService } from './service/profile/profile.service';

@Module({
  controllers: [HelloController],
  providers: [ProfileService]
})
export class HelloModule {}
