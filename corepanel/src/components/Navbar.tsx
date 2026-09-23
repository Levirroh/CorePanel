import { Archive, FileExclamationPoint, Home, LogOut, Users } from "lucide-react";
import NavbarItem from "./navbarItem";

interface NavBarProps {
  isActive: boolean,
}


export default function Navbar({isActive = true}: NavBarProps) {

  const pages = [
    {
      url: "/home",
      title: "Home",
      icon: Home
    },
    {
      url: "/reports",
      title: "Reports",
      icon: FileExclamationPoint
    },
    {
      url: "/users",
      title: "Users",
      icon: Users
    },
    {
      url: "/records",
      title: "Records",
      icon: Archive
    },
  ]

  return (
    <div className={`bg-slate-800 text-white text-sm h-full w-60 flex flex-col gap-2 p-2 justify-between`}>
      <div className="w-full h-[92%]">
        <div className="flex w-full justify-center p-4">
          <p className="font-semibold text-3xl text-slate-200">Core</p>
          <p className="font-bold text-3xl text-orange-600">Panel</p>
        </div>
        <div className="w-full flex flex-col pt-2">
          {pages.map((item) => (
            <NavbarItem key={item.url} url={item.url} title={item.title} Icon={item.icon} />
          ))}

        </div>
      </div>
      <div className="w-full h-[8%]">
        <NavbarItem key={"/login"} url={"/login"} title={"Sair"} Icon={LogOut} />
      </div>
    </div>
  );
}