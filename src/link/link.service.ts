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

// @Injectable()
// export class LinkService {
//   constructor(
//     @InjectRepository(Link)
//     private readonly link: Repository<Link>
//   ) {}

//   async getLinks(page, size): Promise<Link[]> {
//     return this.link.find({ skip: page * size, take: size });
//   }

//   async postLink(link: LinkDTO): Promise<Link> {
//     const newLink = this.link.create({
//       ...link,
//       publicID: shortid.generate()
//     });
//     await this.link.save(newLink);
//     return newLink;
//   }
// }
