import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Link } from "./Link.entity";
import { LinkDTO } from "./interfaces";
import * as shortid from "shortid";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class LinkService extends TypeOrmCrudService<Link> {
  constructor(@InjectRepository(Link) repo) {
    super(repo);
  }
}
