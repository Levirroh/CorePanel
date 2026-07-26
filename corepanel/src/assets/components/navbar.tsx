import { LogOut } from "lucide-react";
import NavbarItem from "./navbarItem";

export default function Navbar({isActive: boolean, activeMenu: Number}) {
  
  const pages = [
    {
      url: "/login",
      title: "Sair",
      icon: LogOut
    }
  ]

  return (
    <div className={`bg-slate-800 text-white text-sm h-full w-60 flex flex-col gap-2 p-2`}>
      {pages.map((item) => (
        <NavbarItem key={item.url} url={item.url} title={item.title} Icon={item.icon} isActive={false}/>
      ))}
    </div>
  );
}