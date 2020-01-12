import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class Link {
  // expecting the hashid here
  @PrimaryColumn({
    type: "text",
    nullable: false
  })
  id: string;

  // title
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

  //
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

  // age / createdAt
  @CreateDateColumn()
  createdAt: Date;
}
