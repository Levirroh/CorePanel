export const Role = {
  user: 1,
  manager: 7,
  analyst: 8,
  admin: 9,
} as const;

export type Role = (typeof Role)[keyof typeof Role];
