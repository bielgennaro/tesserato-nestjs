import { Module } from '@nestjs/common';
import { EmployerService } from 'src/employer/employer.service';
import { EmployersController } from './employers.controller';

@Module({
  imports: [],
  controllers: [EmployersController],
  providers: [EmployerService],
})
export class EmployersModule {}
