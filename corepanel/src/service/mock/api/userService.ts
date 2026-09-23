import type { IUser } from "../../../data/class/User";
import usersJson from "../../../data/database/users.json";

export default function getUsers(): IUser[] {
  return usersJson as IUser[];
}