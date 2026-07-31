import UserContainer from "./userContainer"

export default function UsersHomeContainer() {

  return (
    <div className={`rounded-md p-2 flex justify-center flex-col items-center w-full h-full`}>
      <UserContainer />
    </div>
  );
}