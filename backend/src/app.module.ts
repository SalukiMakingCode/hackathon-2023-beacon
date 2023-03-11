import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './shared/entities/user.entity';
import { SubscribeModule } from './users/subscribe/subscribe.module';
import { AuthModule } from './users/auth/auth.module';
import { SpotEntity } from './shared/entities/spot.entity';
import { EnigmaEntity } from './shared/entities/enigma';
import { JourneySpotEntity } from './shared/entities/journeySpot.entity';
import { JourneyEntity } from './shared/entities/journey.entity';
import { TownEntity } from './shared/entities/town.entity';
import { CategoryEntity } from './shared/entities/category.entity';
import { UsersBadgeEntity } from './shared/entities/usersBadge.entity';
import { GetCurrentUserModule } from './users/getCurrentUser/getCurrentUser.module';
import { GetSpotForOneJourneyModule } from './journey/spot/getSpotForOneJourney.module';
import { GetSpotForOneUserModule } from './users/spot/getSpotForOneUser.module';
import { GetOneSpotWithEnigmaModule } from './spot/getOne/getOneSpotWithEnigma.module';
import { CreateBadgeModule } from './badge/create/createBadge.module';
import { GetAnswerForOneEnigmaModule } from './badge/quizzAnswer/getAnswerForOneEnigma.module';

@Module({
  imports: [
    SubscribeModule,
    AuthModule,
    GetCurrentUserModule,
    GetSpotForOneJourneyModule,
    GetSpotForOneUserModule,
    GetOneSpotWithEnigmaModule,
    CreateBadgeModule,
    GetAnswerForOneEnigmaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      port: 3306,
      password: '',
      database: 'beacon',
      entities: [
        UsersEntity,
        SpotEntity,
        EnigmaEntity,
        JourneySpotEntity,
        JourneyEntity,
        TownEntity,
        CategoryEntity,
        UsersBadgeEntity,
      ],
      autoLoadEntities: true,
      synchronize: true,
      logging: 'all',
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
