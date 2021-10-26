import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('login')
  login() {
    console.log('Login');
  }

  @Post('register')
  register() {
    console.log('Login');
  }

  @Post('logout')
  logout() {
    console.log('Logout');
  }
}
