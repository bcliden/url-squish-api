import { Module } from "@nestjs/common";
import { LinkService } from "./link.service";
import { LinkController } from "./link.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Link } from "./Link.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [LinkService],
  controllers: [LinkController]
})
export class LinkModule {}
