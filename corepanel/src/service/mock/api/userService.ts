import type { IUser } from "../../../data/class/user";
import usersJson from "../../../data/database/users.json";

export function getUsers(): IUser[] {
  return usersJson as IUser[];
}