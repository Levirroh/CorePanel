import { useNavigate } from "react-router-dom";
import { validateSession } from "../helpers/session_helper.tsx"
import { ContactRound, Lock, Shield, ShieldHalf, User } from "lucide-react";
import Navbar from "../assets/components/navbar.tsx";

export default function Home() {
  const navigate = useNavigate();
  const user = validateSession();
  const mainColor = "forestGreen"

  return (
    <div className="h-screen w-full bg-slate-100 flex">
      <Navbar isActive={false}/>
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-6 w-full p-6 lg:p-14">
        <div className={`bg-slate-200 rounded-4xl p-6 border-2 border-slate-300 flex`}>
          <div className="h-full w-1/2 flex flex-col items-center justify-center text-2xl">
            <div>
              <User size={100} color={mainColor} />
            </div>
            <p>Seja bem-vindo {user}</p>
          </div>
          <div className="h-full w-1/2 flex flex-col items-start justify-evenly text-xl">
            <div className="flex items-center">
              <ContactRound size={26} color={mainColor} />
              <p>Perfil: {user}</p>
            </div>
            <div className="flex items-center">
              <ShieldHalf size={26} color={mainColor} />
              <p>Status da sessão: Ativa</p>
            </div>
            <div className="flex items-center">
              <Lock size={26} color={mainColor} />
              <p>Permissões: Total</p>
            </div>
          </div>
        </div>
        <div className={`bg-slate-200 rounded-4xl p-6 border-2 border-slate-300 flex`}>
          <p>Atualizações recentes</p>
        </div>
        <div className={`bg-slate-200 rounded-4xl p-6 border-2 border-slate-300 flex`}>
          <p>Visualizar Dados</p>
        </div>
        <div className={`bg-slate-200 rounded-4xl p-6 border-2 border-slate-300 flex`}>
          <p>Usuários</p>
        </div>
        <div className={`bg-slate-200 rounded-4xl p-6 border-2 border-slate-300 lg:col-span-2`}>
          <p>Ações rápidas</p>
        </div>
      </div>
    </div>
  );
}