import { Controller, Get, UsePipes, Res, Req, BadRequestException } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import * as shortid from 'shortid';
import { LinkService } from "./link/link.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly linkService: LinkService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  // @UsePipes(new ShortidValidator())
  async getPage(@Req() req: Request, @Res() res: Response) {
    try {
      const id = req.params['id'];
      if (shortid.isValid(id)) {
        let { url } = await this.linkService.findOne({ publicId: id });
        console.log("Redirecting to URL -----> [ ", url, " ]")
        res.redirect(url);
      } else {
        throw new BadRequestException("Malformed Id");
      }
    } catch (error) {
      throw new BadRequestException("Malformed Id");
    }
  }
}
