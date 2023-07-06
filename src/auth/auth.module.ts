import { Module } from "@nestjs/common";
import { authService } from "./auth.service";
import { authController } from "./auth.controller";
// import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    // imports: [PrismaModule],
    controllers:[authController],
    providers:[authService]

})

export class authModule {}