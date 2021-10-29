import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import * as firebaseKey from './chat-ab0a7-firebase-adminsdk-y3t7b-9f3cfe170d.json';

@Injectable()
export class FirebaseAdminService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: firebaseKey.project_id,
        clientEmail: firebaseKey.client_email,
        privateKey: firebaseKey.private_key,
      }),
    });
  }

  async verifyToken(idToken: string) {
    return admin.auth().verifyIdToken(idToken);
  }
}
