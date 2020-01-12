import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Generated,
  BeforeInsert
} from "typeorm";
import * as shortid from "shortid";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "text",
    nullable: false,
    default: ""
  })
  publicID: string;

  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @Column({
    type: "text",
    nullable: false
  })
  url: string;

  @Column({
    type: "boolean",
    nullable: false,
    default: false
  })
  public: boolean;

  @Column({
    type: "int",
    nullable: false,
    default: 0
  })
  views: number;

  @CreateDateColumn()
  created: Date;

  @BeforeInsert()
  fillPublicID() {
    this.publicID = shortid.generate();
  }
}
