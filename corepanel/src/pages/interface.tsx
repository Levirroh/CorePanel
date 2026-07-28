import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../assets/components/navbar.tsx";
import { validateSession } from "../helpers/session_helper.tsx";

interface HomeProps {
  container: React.JSX.Element;
}

export default function Interface() {
  const navigate = useNavigate();
  const user = validateSession();
  const mainColor = "forestGreen"


  return (
    <div className="h-screen w-full bg-slate-100 flex">
      <Navbar isActive={false} activeMenu={false} />
      <Outlet />
    </div>
  );
}