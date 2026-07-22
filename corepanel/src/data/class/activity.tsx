import type { Action_type } from "./enum/action_type";
import type { Severity } from "./enum/severity";

export interface IActivity {
  id: number,
  type: Action_type,
  title: string,
  description: string,
  createdAt: Date,
  userId: number,
  severity: Severity,
};