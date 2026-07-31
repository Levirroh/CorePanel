import { ChartNoAxesCombined, FileExclamationPoint, LineChart, LucideUserPlus, ScrollText, User } from "lucide-react";
import ActionButton from "../actionButton";

export default function ActionsContainer() {

  return (
    <div className={`rounded-md p-2 flex justify-center items-center w-full h-full`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-16 w-full grid-rows-1 align-middle justify-center">
        
        <ActionButton title="New user" desc="Create a new user." color="bg-blue-500/60" textColor="text-blue-900" borderColor="border-blue-600" Icon={LucideUserPlus}/>

        <ActionButton title="New report" desc="Report the latest event." color="bg-green-500/60" textColor="text-green-900" borderColor="border-green-600" Icon={FileExclamationPoint}/>
        
        <ActionButton title="New Graphic" desc="Create a graph of anything." color="bg-yellow-500/60" textColor="text-yellow-900"  borderColor="border-yellow-600" Icon={ChartNoAxesCombined  }/>
        
        <ActionButton title="Logs" desc="See the latest logs" color="bg-orange-500/60" textColor="text-orange-900" Icon={ScrollText}  borderColor="border-orange-600"/>
      
      </div>
    </div>
  );
}