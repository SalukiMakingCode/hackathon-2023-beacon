import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../users/auth/jwtAuthGuard';
import { GetOneSpotWithEnigmaService } from './getOneSpotWithEnigma.service';

@Controller('spot')
export class GetOneSpotWithEnigmaController {
  constructor(private readonly getOneSpotWithEnigmaService: GetOneSpotWithEnigmaService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getAll(@Param('id') spotId: string): Promise<any> {
    return this.getOneSpotWithEnigmaService.getOne(Number(spotId));
  }
}
