import type { Record_category } from "./enum/RecordCategory";
import type { Record_status } from "./enum/RecordStatus";

export interface IRecords {
  id: number,
  title: string,
  description: string,
  category: Record_category,
  status: Record_status,
  ownerId: number,
  createdAt: string,
  updatedAt: string,
  value: number,
};