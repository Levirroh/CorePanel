export const Report_status = {
  generated: 1,
  processing: 2,
  failed: 3,
  archived: 4,
} as const;

export type Report_status = (typeof Report_status)[keyof typeof Report_status];
