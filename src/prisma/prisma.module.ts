import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';


@Global() //it export this modules to be accssed in every  modules e.g auth module


@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
