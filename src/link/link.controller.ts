import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UsePipes
} from "@nestjs/common";
import { LinkService } from "./link.service";
import { Link } from "./Link.entity";
import { LinkDTO } from "./interfaces";
import { Crud } from "@nestjsx/crud";

@Crud({
  model: { type: Link },
  params: {
    id: {
      field: "publicId",
      type: "string",
      primary: true
    }
  }
})
@Controller("link")
export class LinkController {
  constructor(public service: LinkService) {}
}
