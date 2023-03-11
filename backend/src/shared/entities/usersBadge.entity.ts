import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SpotEntity } from './spot.entity';
import { UsersEntity } from './user.entity';

@Entity()
export class UsersBadgeEntity {
  @PrimaryGeneratedColumn()
  public userBadgeId: number;

  @Column({ default: 0 })
  public success: number;

  @Column({ default: false })
  failAttemp: number;

  @ManyToOne(() => UsersEntity, (user) => user.userBadge)
  public user: UsersEntity;

  @ManyToOne(() => SpotEntity, (spot) => spot.userBadge)
  public spot: SpotEntity;
}
