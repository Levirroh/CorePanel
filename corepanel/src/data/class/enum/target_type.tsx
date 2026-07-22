export const Target_type = {
  user: 1,
  record: 2,
  report: 3,
  system: 4,
} as const;

export type Target_type = (typeof Target_type)[keyof typeof Target_type];
