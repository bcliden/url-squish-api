import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Link } from "./Link.entity";
import { LinkDTO } from "./interfaces";
import { salt } from "../constants";

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
    const newLink = this.link.create(link);
    // encode URL to base64 for id
    newLink.id = Buffer.from(newLink.url).toString("base64");
    // example of base64 -> utf8
    console.log(Buffer.from(newLink.id, "base64").toString("utf8"));
    await this.link.save(newLink);
    return newLink;
  }
}
