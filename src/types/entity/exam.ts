import type { BaseEntity } from '.';

export interface Exam extends BaseEntity {
  title: string;

  description?: string | null;

  userId: string;

  isPublished?: boolean;

  openAt?: Date | null;

  closeAt?: Date | null;
}
