import type { IReport } from "../../../data/class/report";
import reportsJson from "../../../data/database/reports.json";

export function getReports(): IReport[] {
  return reportsJson as IReport[];
}