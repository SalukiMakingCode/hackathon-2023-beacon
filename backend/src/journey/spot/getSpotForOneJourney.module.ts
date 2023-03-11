import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';
import { GetCurrentUserController } from '../../users/getCurrentUser/getCurrentUser.controller';
import { GetCurrentUserService } from '../../users/getCurrentUser/getCurrentUser.service';
import { GetBadgeForOneJourney } from '../private/getBadgeForOneJourney';
import { GetBadgetForOneJourneyForOneUser } from '../../users/private/getBadgetForOneJourneyForOneUser';
import { GetSpotForOneJourneyController } from './getSpotForOneJourney.controller';
import { SpotEntity } from '../../shared/entities/spot.entity';
import { GetSpotForOneJourneyService } from './getSpotForOneJourney.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, JourneyEntity, JourneySpotEntity, UsersBadgeEntity, SpotEntity])],
  controllers: [GetSpotForOneJourneyController],
  providers: [GetSpotForOneJourneyService],
})
export class GetSpotForOneJourneyModule {}
