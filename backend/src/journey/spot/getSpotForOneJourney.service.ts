import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { FindOptionsOrder, Repository } from 'typeorm';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { GetBadgeForOneJourney } from '../private/getBadgeForOneJourney';
import { GetBadgetForOneJourneyForOneUser } from '../../users/private/getBadgetForOneJourneyForOneUser';

@Injectable()
export class GetSpotForOneJourneyService {
  constructor(
    @InjectRepository(UsersEntity) private usersRepo: Repository<UsersEntity>,
    @InjectRepository(JourneyEntity) private journeyRepo: Repository<JourneyEntity>,
  ) {}

  async getAll(journeyId: number, userId: number): Promise<any> {
    return this.journeyRepo.find({
      where: {
        id: journeyId,
      },
      relations: {
        SpotToJourney: { spot: { enigma: true } },
      },
    });
  }
}
