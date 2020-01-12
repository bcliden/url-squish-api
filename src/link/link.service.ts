import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Link } from "./Link.entity";
import { LinkDTO } from "./interfaces";
import * as shortid from "shortid";
@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link)
    private readonly link: Repository<Link>
  ) {}

  async getLinks(): Promise<Link[]> {
    return this.link.find();
  }

  async postLink(link: LinkDTO): Promise<Link> {
    const newLink = this.link.create({
      ...link,
      id: shortid.generate()
    });
    await this.link.save(newLink);
    return newLink;
  }
}
