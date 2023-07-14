import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployerService } from './employer/employer.service';
import { EmployersController } from './employers/employers.controller';
import { EmployersModule } from './employers/employers.module';

@Module({
  imports: [EmployersModule],
  controllers: [AppController, EmployersController],
  providers: [AppService, EmployerService],
})
export class AppModule {}
