import type { IRecords } from "../../../data/class/record";
import recordsJson from "../../../data/database/records.json";

export function getRecords(): IRecords[] {
  return recordsJson as IRecords[];
}