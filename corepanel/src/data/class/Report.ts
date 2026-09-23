import type { File_type } from "./enum/FileType";
import type { Report_status } from "./enum/ReportStatus";
import type { Report_type } from "./enum/ReportType";

export interface IReport {
  id: number,
  title: string,
  description: string,
  type: Report_type,
  status: Report_status,
  createdByUserId: number,
  createdAt: string,
  generatedAt: string,
  fileFormat: File_type,
  size: number,
};