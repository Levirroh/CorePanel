import type { Record_category } from "./enum/record_category";
import type { Record_status } from "./enum/record_status";

export interface IRecords {
  id: number,
  title: string,
  description: string,
  category: Record_category,
  status: Record_status,
  ownerId: string,
  createdAt: Date,
  updatedAt: Date,
  value: string,
};