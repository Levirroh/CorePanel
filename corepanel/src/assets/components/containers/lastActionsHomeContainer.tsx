import LastActionsContainer from "./lastActionsContainer";
import actionService  from "../../../service/mock/api/actionsService";
import userService  from "../../../service/mock/api/userService";

export default function LastActionsHomeContainer() {

  const actions = actionService();
  const users = userService();

  return (
    <div className={`flex flex-col`}>
      <LastActionsContainer action={actions[0]} user={users.findLast(x => x.id == actions[0].userId)}/>
      <LastActionsContainer action={actions[1]} user={users.findLast(x => x.id == actions[1].userId)}/>
      <LastActionsContainer action={actions[2]} user={users.findLast(x => x.id == actions[2].userId)}/>
    </div>
  );
}