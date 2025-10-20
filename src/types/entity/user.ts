import type { BaseEntity } from '.';
import type { Role } from '../enum/Role';

export interface User extends BaseEntity {
  email: string;

  name: string;

  image?: string;

  role: Role;
}
