import type { IActions } from "../../../data/class/action";
import actionsJson from "../../../data/database/actions.json";

export default function getActions(): IActions[] {
  return actionsJson as IActions[];
}