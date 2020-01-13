import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert
} from "typeorm";
import * as shortid from "shortid";
import { IsString, IsBoolean, IsInt, IsDate } from "class-validator";

@Entity()
export class Link {
  @IsString()
  // @IsShortid()
  @PrimaryGeneratedColumn()
  id: string;

  @IsString()
  @Column({
    type: "text",
    nullable: false,
    default: ""
  })
  publicId: string;

  @IsString()
  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @IsString()
  @Column({
    type: "text",
    nullable: false
  })
  url: string;

  @IsBoolean()
  @Column({
    type: "boolean",
    nullable: false,
    default: false
  })
  isPublic: boolean;

  @IsInt()
  @Column({
    type: "int",
    nullable: false,
    default: 0
  })
  views: number;

  @IsDate()
  @CreateDateColumn()
  created: Date;

  @BeforeInsert()
  before() {
    // generate publicId
    this.publicId = shortid.generate();

    // check for absolute url
    if (!this.url.includes("http://") && !this.url.includes("https://")){
      this.url = "http://" + this.url
    }
  }
}
