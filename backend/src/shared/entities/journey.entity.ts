import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TownEntity } from './town.entity';
import { CategoryEntity } from './category.entity';
import { JourneySpotEntity } from './journeySpot.entity';

@Entity('journey')
export class JourneyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => TownEntity, (town) => town.id)
  town: TownEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.id)
  category: CategoryEntity;

  @OneToMany(() => JourneySpotEntity, (journeySpot) => journeySpot.journey)
  public SpotToJourney: JourneySpotEntity[];
}
