import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";


export default function Interface() {


  return (
    <div className="h-screen w-full bg-slate-100 flex">
      <Navbar />
      <Outlet />
    </div>
  );
}