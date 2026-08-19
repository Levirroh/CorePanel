import { validateSession } from "../helpers/session_helper.tsx"
import { ContactRound, Lock, ShieldHalf, User } from "lucide-react";
import ActionsContainer from "../assets/components/containers/actionsContainer.tsx";
import UsersHomeContainer from "../assets/components/containers/usersHomeContainer.tsx";
import LastActionsHomeContainer from "../assets/components/containers/lastActionsHomeContainer.tsx";
import ViewDataHomeContainer from "../assets/components/containers/viewDataHomeContainer.tsx";
import { capitalFirstLetter } from "../helpers/formater_helper.tsx";

export default function Home() {
  const user = validateSession();
  const mainColor = "forestGreen"

  return (
    <div className="h-screen w-full bg-slate-200 flex">
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-6 w-full p-6 lg:p-14">
        <div className={`bg-slate-100 rounded-xl p-6 border-2 border-slate-300 flex`}>
          <div className="h-full w-1/2 flex flex-col items-center justify-center text-xl">
            <div>
              <User size={100} color={mainColor} />
            </div>
            <p className="text-center">Welcome {capitalFirstLetter(user)}</p>
          </div>
          <div className="h-full w-1/2 flex flex-col items-start justify-evenly text-lg">
            <div className="flex items-center">
              <ContactRound size={26} color={mainColor} />
              <p>Profile: {capitalFirstLetter(user)}</p>
            </div>
            <div className="flex items-center">
              <ShieldHalf size={26} color={mainColor} />
              <p>Session: Active</p>
            </div>
            <div className="flex items-center">
              <Lock size={26} color={mainColor} />
              <p>Permissions: All</p>
            </div>
          </div>
        </div>
        <div className={`bg-slate-100 rounded-xl p-6 border-2 border-slate-300 flex flex-col`}>
          <p>Last Actions</p>
          <LastActionsHomeContainer />
        </div>
        <div className={`bg-slate-100 rounded-xl p-6 border-2 border-slate-300 flex flex-col`}>
          <ViewDataHomeContainer />
        </div>
        <div className={`bg-slate-100 rounded-xl p-6 border-2 border-slate-300 flex flex-col`}>
          <p>Users</p>
          <UsersHomeContainer />
        </div>
        <div className={`bg-slate-100 rounded-xl p-6 border-2 border-slate-300 col-span-2 h-full flex flex-col`}>
          <p>Quick Actions</p>
          <ActionsContainer />
        </div>
      </div>
    </div>
  );
}