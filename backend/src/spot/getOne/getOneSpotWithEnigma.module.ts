import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';
import { SpotEntity } from '../../shared/entities/spot.entity';
import { GetOneSpotWithEnigmaService } from './getOneSpotWithEnigma.service';
import { GetOneSpotWithEnigmaController } from './getOneSpotWithEnigma.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, JourneyEntity, JourneySpotEntity, UsersBadgeEntity, SpotEntity])],
  controllers: [GetOneSpotWithEnigmaController],
  providers: [GetOneSpotWithEnigmaService],
})
export class GetOneSpotWithEnigmaModule {}
