import type { Role } from "./enum/Role";
import type { User_status } from "./enum/UserStatus";

export interface IUser {
  id: number,
  name: string,
  email: string,
  username: string,
  role: Role,
  status: User_status,
  profileImage: string,
  createdAt: string,
  lastAccessAt: string
};