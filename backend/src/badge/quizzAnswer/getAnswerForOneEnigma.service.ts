import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAnswerForOneEnigmaService {
  constructor(@InjectRepository(UsersBadgeEntity) private usersBadgeRepo: Repository<UsersBadgeEntity>) {}

  async answer(userId: number, answer): Promise<any> {
    console.log(answer.spotId);

    const failed = await this.usersBadgeRepo.find({
      select: {
        failAttemp: true,
      },
      where: {
        spot: { id: answer.spotId },
        user: { id: userId },
      },
    });

    if (!answer.answerStatus) {
      await this.usersBadgeRepo.query(
        `UPDATE users_badge_entity SET failAttemp = failAttemp + 1 WHERE userId='${userId}' AND spotId='${answer.spotId}'`,
      );

      return false;
    }

    let success = 0;

    if (failed[0].failAttemp === 0) {
      success = 100;
    }

    if (failed[0].failAttemp === 1) {
      success = 75;
    }

    if (failed[0].failAttemp === 2) {
      success = 50;
    }

    if (failed[0].failAttemp === 3) {
      success = 20;
    }

    await this.usersBadgeRepo.query(
      `UPDATE users_badge_entity SET success = ${success} WHERE userId='${userId}' AND spotId='${answer.spotId}'`,
    );

    return true;
  }
}
