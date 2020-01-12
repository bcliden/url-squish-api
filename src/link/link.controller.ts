import { Controller, Get, Post, Body, Param, Query } from "@nestjs/common";
import { LinkService } from "./link.service";
import { Link } from "./Link.entity";
import { LinkDTO } from "./interfaces";

@Controller("link")
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Get()
  async getAllLinks(
    @Query("page") page: number = 0,
    @Query("size") size: number = 5
  ): Promise<any> {
    const links = await this.linkService.getLinks(page, size);
    return {
      links,
      page,
      size
    };
  }

  @Post()
  postLink(@Body() link: LinkDTO): Promise<Link> {
    console.log(link);
    return this.linkService.postLink(link);
  }
}
