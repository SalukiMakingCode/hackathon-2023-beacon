import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateBadgeService } from '../create/createBadge.service';
import { JwtAuthGuard } from '../../users/auth/jwtAuthGuard';
import { User } from '../../shared/decorator/user.decorator';
import { GetAnswerForOneEnigmaService } from './getAnswerForOneEnigma.service';

@Controller('badge')
export class GetAnswerForOneEnigmaController {
  constructor(private readonly getAnswerForOneEnigmaService: GetAnswerForOneEnigmaService) {}

  @UseGuards(JwtAuthGuard)
  @Post('answer')
  getAnswer(@User() userId: number, @Body() answer: any): Promise<any> {
    return this.getAnswerForOneEnigmaService.answer(userId, answer);
  }
}
