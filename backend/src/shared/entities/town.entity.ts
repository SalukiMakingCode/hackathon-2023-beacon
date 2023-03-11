import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('town')
export class TownEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
