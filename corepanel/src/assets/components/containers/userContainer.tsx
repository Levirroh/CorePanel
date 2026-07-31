import image from "../../images/random-person-01.jpeg"
import UserPictureContainer from "./userPictureContainer"

export default function UserContainer() {
  return (
      <div className="bg-slate-100 rounded-xl p-6 border-2 border-slate-200 flex">
        <UserPictureContainer imagePath={image}/>
        <div>

        </div>
        <div>

        </div>
        <p>José maria</p>
        <p>admin</p>
        <p>último acesso - 11:02</p>
        <p>asd</p>
      </div>
  );
}