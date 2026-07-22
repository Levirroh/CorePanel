import type { File_type } from "./enum/file_type";
import type { Report_status } from "./enum/report_status";
import type { Report_type } from "./enum/report_type";

export interface IReport {
  id: number,
  title: string,
  description: string,
  type: Report_type,
  status: Report_status,
  createdBy: string,
  createdAt: Date,
  generatedAt: Date,
  fileFormat: File_type,
  size: string,
};