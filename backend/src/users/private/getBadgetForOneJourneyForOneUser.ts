import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';
import { Repository } from 'typeorm';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';

@Injectable()
export class GetBadgetForOneJourneyForOneUser {
  constructor(
    @InjectRepository(JourneySpotEntity) private journeySpotRepo: Repository<JourneySpotEntity>,
    @InjectRepository(UsersBadgeEntity) private userBadgeRepo: Repository<UsersBadgeEntity>,
  ) {}

  async get(journeyId: number, userId: number): Promise<number> {
    let total = 0;

    const spotInJourney = await this.journeySpotRepo.query(
      `SELECT spotId FROM journey_spot_entity WHERE journeyID = ${journeyId}`,
    );

    for (let i = 0; i < spotInJourney.length - 1; i++) {
      const badgeOwned = await this.userBadgeRepo.query(
        `SELECT userBadgeId FROM users_badge_entity WHERE spotId=${spotInJourney[i].spotId} AND userId=${userId}`,
      );
      console.log('badgeOwned.userBadgeId', badgeOwned.length);
      if (badgeOwned.length === 1) {
        total++;
      }
    }

    return total;
  }
}
