import LastActionsContainer from "./lastActionsContainer";
import actionService  from "../../../service/mock/api/actionsService";

export default function LastActionsHomeContainer() {

  const actions = actionService();

  return (
    <div className={`flex flex-col`}>
      <LastActionsContainer action={actions[0]}/>
      <LastActionsContainer action={actions[1]}/>
      <LastActionsContainer action={actions[2]}/>
    </div>
  );
}