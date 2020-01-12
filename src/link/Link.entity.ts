import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "text",
    nullable: false
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
}
