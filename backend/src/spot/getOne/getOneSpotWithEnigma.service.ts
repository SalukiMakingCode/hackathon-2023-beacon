import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../shared/entities/user.entity';
import { Repository } from 'typeorm';
import { SpotEntity } from '../../shared/entities/spot.entity';

@Injectable()
export class GetOneSpotWithEnigmaService {
  constructor(
    @InjectRepository(UsersEntity) private usersRepo: Repository<UsersEntity>,
    @InjectRepository(SpotEntity) private spotRepo: Repository<SpotEntity>,
  ) {}

  async getOne(spotId: number): Promise<any> {
    return this.spotRepo.find({
      where: {
        id: spotId,
      },
      relations: {
        enigma: true,
      },
    });
  }
}
