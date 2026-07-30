import { LucideUserPlus, User, UserPlus, UserRoundPlus } from "lucide-react";
import ActionButton from "../action";

export default function ActionsContainer() {

  return (
    <div className={`rounded-md p-2 flex justify-center items-center w-full h-full`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-8 w-full grid-rows-1 align-middle justify-center">
        <ActionButton title="Novo usuário" color="bg-blue-500/60" textColor="text-blue-900" borderColor="border-blue-600" Icon={LucideUserPlus} desc="Cadastre um novo usuário."/>
        <ActionButton color="bg-green-500/60" textColor="text-green" Icon={User}  borderColor="border-green-600"/>
        <ActionButton title="Novo usuário" color="bg-yellow-500/60" textColor="text-yellow"  borderColor="border-yellow-600"/>
        <ActionButton color="bg-orange-500/60" textColor="text-orange" Icon={User}  borderColor="border-orange-600"/>
      </div>
    </div>
  );
}