import { SquareArrowRightExit } from "lucide-react";
import type { IActions } from "../../../data/class/action";
import type { IUser } from "../../../data/class/user";
import { formatDate } from "../../../helpers/formater_helper";

interface LastActionsProps {
  action: IActions,
  user: IUser | undefined
}


export default function LastActionsContainer({ action, user }: LastActionsProps) {

  return (
    <div className={`flex rounded-md p-4 bg-slate-100 shadow-xs/20 hover:shadow-2xl/40 justify-between items-center hover:scale-103 transition duration-200 hover:bg-slate-800 hover:text-white`}>
      <div className="">
        <p><a className="font-semibold truncate" href={`users/${user?.id}`}>{user?.name}:</a> {action.description}</p>
        <p className="text-xs text-slate-500 font-semibold">{formatDate(action.createdAt)}</p>
      </div>
      <a href={`actions/${action?.id}`}>
        <SquareArrowRightExit height={28} width={28} color="#818181" />
      </a>
    </div>
  );
}