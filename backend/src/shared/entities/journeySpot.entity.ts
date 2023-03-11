import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SpotEntity } from './spot.entity';
import { JourneyEntity } from './journey.entity';

@Entity()
export class JourneySpotEntity {
  @PrimaryGeneratedColumn()
  public journeySpotId: number;

  @Column()
  public order: number;

  @ManyToOne(() => JourneyEntity, (journey) => journey.SpotToJourney)
  public journey: JourneyEntity[];

  @ManyToOne(() => SpotEntity, (spot) => spot.SpotToJourney)
  public spot: SpotEntity[];
}
