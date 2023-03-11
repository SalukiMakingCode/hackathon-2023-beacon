import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';
import { GetAnswerForOneEnigmaController } from './getAnswerForOneEnigma.controller';
import { GetAnswerForOneEnigmaService } from './getAnswerForOneEnigma.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, JourneyEntity, JourneySpotEntity, UsersBadgeEntity])],
  controllers: [GetAnswerForOneEnigmaController],
  providers: [GetAnswerForOneEnigmaService],
})
export class GetAnswerForOneEnigmaModule {}
