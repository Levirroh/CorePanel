export const Role = {
  user: 'admin',
  manager: 'manager',
  analyst: 'analyst',
  admin: 'admin',
} as const;

export type Role = (typeof Role)[keyof typeof Role];
