import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';
import { SpotEntity } from '../../shared/entities/spot.entity';
import { GetSpotForOneJourneyController } from '../../journey/spot/getSpotForOneJourney.controller';
import { GetSpotForOneJourneyService } from '../../journey/spot/getSpotForOneJourney.service';
import { GetSpotForOneUserController } from './getSpotForOneUser.controller';
import { GetSpotForOneUserService } from './getSpotForOneUse.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, JourneyEntity, JourneySpotEntity, UsersBadgeEntity, SpotEntity])],
  controllers: [GetSpotForOneUserController],
  providers: [GetSpotForOneUserService],
})
export class GetSpotForOneUserModule {}
