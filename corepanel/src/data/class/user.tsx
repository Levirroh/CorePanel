import type { Role } from "./enum/role";
import type { User_status } from "./enum/user_status";

export interface IUser {
  id: number,
  name: string,
  email: string,
  username: string,
  role: Role,
  status: User_status,
  profileImage: string,
  createdAt: Date,
  lastAccessAt: Date
};