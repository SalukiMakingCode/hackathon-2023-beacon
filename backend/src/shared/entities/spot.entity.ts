import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EnigmaEntity } from './enigma';
import { JourneySpotEntity } from './journeySpot.entity';
import { UsersBadgeEntity } from './usersBadge.entity';

@Entity('spot')
export class SpotEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  badgeUrl: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(() => EnigmaEntity)
  @JoinColumn()
  enigma: EnigmaEntity;

  @OneToMany(() => JourneySpotEntity, (journeySpot) => journeySpot.spot)
  public SpotToJourney: JourneySpotEntity[];

  @OneToMany(() => UsersBadgeEntity, (spot) => spot.spot)
  public userBadge: UsersBadgeEntity[];
}
