import UserContainer from "./userContainer"
import userService from "../../../service/mock/api/userService"

export default function UsersHomeContainer() {

  const users = userService();

  return (
    <div className={`rounded-md p-2 flex flex-col w-full h-full gap-4 justify-baseline`}>
      <UserContainer user={users[0]} />
      <UserContainer user={users[1]} />
      <UserContainer user={users[2]} />
    </div>
  );
}