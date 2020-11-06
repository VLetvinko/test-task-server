import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  name: string;

}
