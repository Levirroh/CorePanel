import type { Actions } from "./enum/Actions";
import type { Result } from "./enum/Result";
import type { Target_type } from "./enum/TargetType";

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