export const Role = {
  Admin: 'Admin',
  Student: 'Student',
  Lecturer: 'Lecturer',
} as const;

export type Role = (typeof Role)[keyof typeof Role];
