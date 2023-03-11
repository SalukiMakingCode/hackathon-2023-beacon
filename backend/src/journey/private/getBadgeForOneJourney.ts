import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';

@Injectable()
export class GetBadgeForOneJourney {
  constructor(@InjectRepository(JourneySpotEntity) private journeySpotRepo: Repository<JourneySpotEntity>) {}

  async get(journeyId: number): Promise<number> {
    return await this.journeySpotRepo.query(`SELECT COUNT(*) AS TOTAL FROM journey_spot_entity WHERE journeyID = ${journeyId}`);
  }
}
