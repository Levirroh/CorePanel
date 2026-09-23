import type { Action_type } from "./enum/ActionType";
import type { Severity } from "./enum/severity";

export interface IActivity {
  id: number,
  type: Action_type,
  title: string,
  description: string,
  createdAt: string,
  userId: number,
  severity: Severity,
};