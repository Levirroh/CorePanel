import { Archive, FileExclamationPoint, Home, LogOut, NotebookPen, Users } from "lucide-react";
import NavbarItem from "./navbarItem";

export default function Navbar({ isActive: boolean, activeMenu: Number }) {

  const pages = [
    {
      url: "/home",
      title: "Home",
      icon: Home
    },
    {
      url: "activities",
      title: "Activities",
      icon: NotebookPen
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
        {pages.map((item) => (
          <NavbarItem key={item.url} url={item.url} title={item.title} Icon={item.icon} />
        ))}
      </div>
      <div className="w-full h-[8%]">
        <NavbarItem key={"/login"} url={"/login"} title={"Sair"} Icon={LogOut} />
      </div>
    </div>
  );
}