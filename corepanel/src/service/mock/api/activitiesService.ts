import type { IActivity } from "../../../data/class/Activity";
import activitiesJson from "../../../data/database/activities.json";

export function getActivities(): IActivity[] {
  return activitiesJson as IActivity[];
}