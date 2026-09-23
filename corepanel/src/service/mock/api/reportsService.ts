import type { IReport } from "../../../data/class/Report";
import reportsJson from "../../../data/database/reports.json";

export function getReports(): IReport[] {
  return reportsJson as IReport[];
}