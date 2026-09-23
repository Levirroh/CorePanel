export const Record_category = {
  finance: 1,
  inventory: 2,
  customer: 3,
  operation: 4,
  internal: 5,
} as const;

export type Record_category = (typeof Record_category)[keyof typeof Record_category];
