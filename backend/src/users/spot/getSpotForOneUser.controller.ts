import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtAuthGuard';
import { User } from '../../shared/decorator/user.decorator';
import { GetSpotForOneUserService } from './getSpotForOneUse.service';

@Controller('users')
export class GetSpotForOneUserController {
  constructor(private readonly getSpotForOneUserService: GetSpotForOneUserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('spot')
  getAll(@User() userId: number): Promise<any> {
    return this.getSpotForOneUserService.getAll(userId);
  }
}
