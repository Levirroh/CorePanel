export const User_status = {
  inactive: 0,
  active: 1,
  pending: 2,
  blocked: 3,
} as const;

export type User_status = (typeof User_status)[keyof typeof User_status];
