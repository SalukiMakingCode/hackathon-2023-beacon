import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('enigma')
export class EnigmaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  goodAnswer: string;

  @Column()
  badAnswer1: string;

  @Column()
  badAnswer2: string;

  @Column()
  badAnswer3: string;
}
