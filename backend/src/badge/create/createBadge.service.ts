import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';

@Injectable()
export class CreateBadgeService {
  constructor(@InjectRepository(UsersBadgeEntity) private usersBadgeRepo: Repository<UsersBadgeEntity>) {}

  async create(userId, spotId): Promise<any> {
    await this.usersBadgeRepo.query(
      `INSERT INTO users_badge_entity (success, userId, spotId) VALUES ('0', '${userId}', '${spotId.spotId}')`,
    );

    return true;
  }
}
