import { Home, LogOut } from "lucide-react";
import NavbarItem from "./navbarItem";

export default function Navbar({ isActive: boolean, activeMenu: Number }) {

  const pages = [
    {
      url: "/home",
      title: "Home",
      icon: Home
    }
  ]

  return (
    <div className={`bg-slate-800 text-white text-sm h-full w-60 flex flex-col gap-2 p-2 justify-between`}>
      <div className="w-full h-[92%]">
        {pages.map((item) => (
          <NavbarItem key={item.url} url={item.url} title={item.title} Icon={item.icon}/>
        ))}
      </div>
      <div className="w-full h-[8%]">
        <NavbarItem key={"/login"} url={"/login"} title={"Sair"} Icon={LogOut}/>
      </div>
    </div>
  );
}