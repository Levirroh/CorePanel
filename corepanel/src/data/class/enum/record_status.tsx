export const Record_status = {
  active: 1,
  archived: 2,
  pending: 3,
  rejected: 4,
} as const;

export type Record_status = (typeof Record_status)[keyof typeof Record_status];
