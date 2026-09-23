export const Action_type = {
  user_created: 1,
  user_updated: 2,
  report_generated: 3,
  report_created: 4,
  permission_change: 5,
  login: 6,
  logout: 7,
  system_alert: 8,
} as const;

export type Action_type = (typeof Action_type)[keyof typeof Action_type];
