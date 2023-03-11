import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { lifetime } from './lifeTime';
import { JourneyEntity } from './journey.entity';
import { UsersBadgeEntity } from './usersBadge.entity';

@Entity('users')
export class UsersEntity extends lifetime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hashPassword: string;

  @Column({ length: 400 })
  email: string;

  @ManyToMany(() => JourneyEntity)
  @JoinTable()
  journey: JourneyEntity[];

  @OneToMany(() => UsersBadgeEntity, (user) => user.user)
  public userBadge: UsersBadgeEntity[];
}
