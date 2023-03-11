import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwtAuthGuard';
import { User } from '../../shared/decorator/user.decorator';
import { GetCurrentUserService } from './getCurrentUser.service';

@Controller('users')
export class GetCurrentUserController {
  constructor(private readonly getCurrentUserService: GetCurrentUserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getUser(@User() userId: number): Promise<any> {
    return this.getCurrentUserService.getUser(userId);
  }
}
