import UserContainer from "./userContainer"

export default function UsersHomeContainer() {

  return (
    <div className={`rounded-md p-2 flex flex-col w-full h-full gap-4 justify-baseline`}>
      <UserContainer />
      <UserContainer />
      <UserContainer />
    </div>
  );
}