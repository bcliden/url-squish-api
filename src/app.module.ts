import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LinkModule } from "./link/link.module";
import { Link } from "./link/Link.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "../database.sql",
      synchronize: true,
      entities: [Link]
    }),
    LinkModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
