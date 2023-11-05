
import { Module } from '@nestjs/common/decorators';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })]
})

export class AppModule { }
