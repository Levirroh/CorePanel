import { Role } from "../../../data/class/enum/role";
import type { IUser } from "../../../data/class/user";
import { capitalFirstLetter, formatDate } from "../../../helpers/formater_helper";
import { getUserImage } from "../../../helpers/path_helper";
import UserPictureContainer from "./userPictureContainer"

interface UserProp {
  user: IUser
}

export default function UserContainer({user}: UserProp) {

  const userRole = capitalFirstLetter(Role[user.role]); 
  
  return (
    <div className="bg-slate-100 rounded-xl p-6 border-2 w-full border-slate-200 flex relative items-center">
      <UserPictureContainer userName={user.name} imagePath={getUserImage(user.profileImage)} />
      <div className="p-2">
        <p className="font-semibold text-[0.7vw]">{user.name}</p>
        <p className="text-slate-700">{userRole}</p>
      </div>
      <div className="absolute bottom-2 right-4 text-slate-700">
        <p>Last access: {formatDate(user.lastAccessAt)}</p>
      </div>
    </div>
  );
}