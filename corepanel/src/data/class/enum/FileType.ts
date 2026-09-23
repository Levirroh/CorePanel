export const File_type = {
  pdf: 1,
  csv: 2,
  xlsx: 3,
} as const;

export type File_type = (typeof File_type)[keyof typeof File_type];
