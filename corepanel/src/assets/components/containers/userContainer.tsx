import type { IUser } from "../../../data/class/user";
import UserPictureContainer from "./userPictureContainer"

interface UserProp {
  user: IUser
}

export default function UserContainer({user}: UserProp) {
  return (
    <div className="bg-slate-100 rounded-xl p-6 border-2 w-full border-slate-200 flex relative">
      <UserPictureContainer imagePath={user.profileImage} />
      <div className="p-2">
        <p className="font-semibold text-[0.7vw]">{user.name}</p>
        <p className="text-slate-700">{user.role}</p>
      </div>
      <div className="absolute bottom-2 right-4 text-slate-700">
        <p>Último acesso às {user.lastAccessAt}</p>
      </div>
    </div>
  );
}