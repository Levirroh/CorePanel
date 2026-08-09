import type { IActions } from "../../../data/class/action";

interface LastActionsProps {
  action: IActions
}


export default function LastActionsContainer({action}: LastActionsProps) {


  
  return (
    <div className={`flex flex-col`}>
      <p>{action.description}</p>
    </div>
  );
}