import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { Repository } from 'typeorm';
import { ErrorMessage, ErrorStatus } from '../../shared/enum/error.enum';
import { JourneyEntity } from '../../shared/entities/journey.entity';
import { GetBadgeForOneJourney } from '../../journey/private/getBadgeForOneJourney';
import { GetBadgetForOneJourneyForOneUser } from '../private/getBadgetForOneJourneyForOneUser';

type CurrentUserDto = UsersEntity & {
  journey: Array<JourneyEntity & { badgeOwned?: number; badgeInJourney?: number; completedPourcentage?: number }>;
};

@Injectable()
export class GetCurrentUserService {
  constructor(
    @InjectRepository(UsersEntity) private usersRepo: Repository<UsersEntity>,
    @InjectRepository(JourneyEntity) private journeyRepo: Repository<JourneyEntity>,
    private getBadgeForOnJourney: GetBadgeForOneJourney,
    private getBadgeForOnJourneyForOneUser: GetBadgetForOneJourneyForOneUser,
  ) {}

  async getUser(userId: number): Promise<CurrentUserDto> {
    if (!(await this.checkUserExistById(userId))) {
      throw new HttpException(ErrorMessage.USER_NOT_FOUND, ErrorStatus.USER_NOT_FOUND);
    }

    const user: CurrentUserDto = await this.usersRepo.findOneOrFail({
      // return this.usersRepo.findOneOrFail({
      select: {
        id: true,
        email: true,
      },
      relations: {
        journey: true,
        userBadge: true,
      },
      where: {
        id: userId,
      },
    });

    for (let i = 0; i < user.journey.length; i++) {
      user.journey[i].badgeInJourney = await this.getBadgeForOnJourney.get(user.journey[i].id);
      user.journey[i].badgeOwned = await this.getBadgeForOnJourneyForOneUser.get(user.journey[i].id, userId);

      if (user.journey[i].badgeOwned === 0) {
        user.journey[i].completedPourcentage = 0;

        continue;
      }

      user.journey[i].completedPourcentage = (user.journey[i].badgeOwned / user.journey[i].badgeInJourney[0].TOTAL) * 100;
    }

    return user;
  }

  async checkUserExistById(id: number): Promise<boolean> {
    return this.usersRepo
      .findOneOrFail({
        select: { id: true },
        where: { id: id },
      })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}
