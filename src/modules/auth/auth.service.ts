import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from '@services/firebase.service';

@Injectable()
export class AuthService {
  constructor(private readonly _firebaseService: FirebaseAdminService) {}

  async login(firebaseToken: string) {
    try {
      const result = await this._firebaseService.verifyToken(firebaseToken);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
