import type { IActions } from "../../../data/class/action";
import type { IUser } from "../../../data/class/user";

interface LastActionsProps {
  action: IActions,
  user: IUser | undefined
}


export default function LastActionsContainer({action, user}: LastActionsProps) {

  return (
    <div className={`flex flex-col`}>
      <p><a href={`users/${user?.id}`}>{user?.name}</a> {action.description}</p>
    </div>
  );
}