import image from "../../images/random-person-01.jpeg"
import UserPictureContainer from "./userPictureContainer"

export default function UserContainer() {
  return (
    <div className="bg-slate-100 rounded-xl p-6 border-2 w-full border-slate-200 flex relative">
      <UserPictureContainer imagePath={image} />
      <div className="p-2">
        <p className="font-semibold text-[0.7vw]">Márcio José</p>
        <p className="text-slate-700">Admin</p>
      </div>
      <div className="absolute bottom-2 right-4 text-slate-700">
        <p>Último acesso às 11:02</p>
      </div>
    </div>
  );
}