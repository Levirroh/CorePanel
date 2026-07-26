export const Actions = {
  create: 1,
  update: 2,
  delete: 3,
  export: 4,
  login: 5,
  logout: 6,
  generate_report: 7,
  change_permission: 8,
} as const;

export type Actions = (typeof Actions)[keyof typeof Actions];
