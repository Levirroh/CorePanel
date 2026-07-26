export const Result = {
  success: 1,
  failed: 2,
  denied: 3,
} as const;

export type Result = (typeof Result)[keyof typeof Result];
