import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../users/auth/jwtAuthGuard';
import { User } from '../../shared/decorator/user.decorator';
import { CreateBadgeService } from './createBadge.service';

@Controller('badge')
export class CreateBadgeController {
  constructor(private readonly createBadgeService: CreateBadgeService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  getUser(@User() userId: number, @Body() spotId: number): Promise<any> {
    return this.createBadgeService.create(userId, spotId);
  }
}
