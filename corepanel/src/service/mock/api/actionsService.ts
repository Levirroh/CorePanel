import type { IActions } from "../../../data/class/Action";
import actionsJson from "../../../data/database/actions.json";

export default function getActions(): IActions[] {
  return actionsJson as IActions[];
}