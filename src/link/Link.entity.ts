import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Generated,
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
  publicID: string;

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
  fillPublicID() {
    this.publicID = shortid.generate();
  }
}
