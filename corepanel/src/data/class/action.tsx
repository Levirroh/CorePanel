import type { Actions } from "./enum/actions";
import type { Result } from "./enum/result";
import type { Target_type } from "./enum/target_type";

export interface IActions {
  id: number,
  action: Actions,
  description: string,
  userId: number,
  targetType: Target_type,
  targetId: number,
  createdAt: string,
  result: Result,
};