import { useNavigate } from "react-router-dom";
import { validateSession } from "../../public/helpers/session_helper.tsx"
import Container from "../assets/container.tsx";

export default function Home() {
  const navigate = useNavigate();
  const user = validateSession();


  return (
    <div className="h-screen w-screen bg-slate-200 grid grid-cols-2 grid-rows-3 p-14 gap-4">
      <Container message={"Seja bem-vindo {user}"} />
      <Container message={"Atualizações recentes (gráficos)"} />
      <Container message={"Visualizar dados"} />
      <Container message={"Usuários"} />
      <Container message={"Realizar ações"} />
    </div>
  );
}