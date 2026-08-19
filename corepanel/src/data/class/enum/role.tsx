export const Role = {
  user: 'admin',
  manager: 'manager',
  analyst: 'analist',
  admin: 'admin',
} as const;

export type Role = (typeof Role)[keyof typeof Role];
