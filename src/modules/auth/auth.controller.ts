import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

export class LoginBody {
  firebaseToken: string;
}

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('login')
  async login(@Body() firebaseToken: LoginBody) {
    return await this._authService.login(firebaseToken.firebaseToken);
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
