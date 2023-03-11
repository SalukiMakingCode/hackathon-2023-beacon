import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GetCurrentUserService } from '../../users/getCurrentUser/getCurrentUser.service';
import { JwtAuthGuard } from '../../users/auth/jwtAuthGuard';
import { User } from '../../shared/decorator/user.decorator';
import { GetSpotForOneJourneyService } from './getSpotForOneJourney.service';

@Controller('journey')
export class GetSpotForOneJourneyController {
  constructor(private readonly getSpotForOneJourneyService: GetSpotForOneJourneyService) {}

  @UseGuards(JwtAuthGuard)
  @Get('spot/:id')
  getAll(@User() userId: number, @Param('id') journeyId: string): Promise<any> {
    return this.getSpotForOneJourneyService.getAll(Number(journeyId), userId);
  }
}
