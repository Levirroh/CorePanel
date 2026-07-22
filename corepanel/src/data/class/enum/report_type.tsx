export const Report_type = {
  monthly: 1,
  users: 2,
  records: 3,
  financial: 4,
  activity: 5,
} as const;

export type Report_type = (typeof Report_type)[keyof typeof Report_type];
