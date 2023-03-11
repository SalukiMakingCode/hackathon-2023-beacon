import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { JourneySpotEntity } from '../../shared/entities/journeySpot.entity';
import { UsersBadgeEntity } from '../../shared/entities/usersBadge.entity';
import { CreateBadgeController } from './createBadge.controller';
import { CreateBadgeService } from './createBadge.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, JourneyEntity, JourneySpotEntity, UsersBadgeEntity])],
  controllers: [CreateBadgeController],
  providers: [CreateBadgeService],
})
export class CreateBadgeModule {}
