export const Severity = {
  info: 1,
  success: 2,
  warning: 3,
  danger: 4,
} as const;

export type Severity = (typeof Severity)[keyof typeof Severity];
