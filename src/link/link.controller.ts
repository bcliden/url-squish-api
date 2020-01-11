import { Controller, Get, Post, Body } from "@nestjs/common";
import { LinkService } from "./link.service";
import { Link } from "./Link.entity";
import { LinkDTO } from "./interfaces";

@Controller("link")
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Get()
  getAllLinks(): Promise<Link[]> {
    return this.linkService.getLinks();
  }

  @Post()
  postLink(@Body() link: LinkDTO): Promise<Link> {
    console.log(link);
    return this.linkService.postLink(link);
  }
}
