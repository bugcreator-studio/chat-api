import { BasedEntity } from '@common/base.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BasedEntity {}
