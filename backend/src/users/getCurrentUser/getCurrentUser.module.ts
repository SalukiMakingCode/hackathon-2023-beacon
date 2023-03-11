import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { GetCurrentUserController } from './getCurrentUser.controller';
import { GetCurrentUserService } from './getCurrentUser.service';
import { GetBadgeForOneJourney } from '../../journey/private/getBadgeForOneJourney';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';
import { GetBadgetForOneJourneyForOneUser } from '../private/getBadgetForOneJourneyForOneUser';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, JourneyEntity, JourneySpotEntity, UsersBadgeEntity])],
  controllers: [GetCurrentUserController],
  providers: [GetCurrentUserService, GetBadgeForOneJourney, GetBadgetForOneJourneyForOneUser],
})
export class GetCurrentUserModule {}
