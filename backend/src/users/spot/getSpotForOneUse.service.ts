import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { Repository } from 'typeorm';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';

@Injectable()
export class GetSpotForOneUserService {
  constructor(
    @InjectRepository(UsersBadgeEntity) private usersBadgeRepo: Repository<UsersBadgeEntity>,
    @InjectRepository(JourneyEntity) private journeyRepo: Repository<JourneyEntity>,
  ) {}

  async getAll(userId: number): Promise<any> {
    return this.usersBadgeRepo.find({
      select: {
        userBadgeId: true,
        success: true,
      },
      where: {
        user: { id: userId },
      },
      relations: {
        spot: true,
      },
    });
  }
}
