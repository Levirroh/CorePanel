interface Props {
  url: string,
  title: string,
  Icon: React.ElementType,
}


export default function NavbarItem({ url, title, Icon }: Props) {
  const isActive = ("/" + window.location.href.split("/")[3]) == url;

  console.log(isActive)
  console.log(window.location.href.split("/")[3])
  console.log(url)

  return (
    <a href={url}>
      <div className={`${isActive ? "bg-orange-600" : "bg-none"} rounded-xl text-white text-sm h-12 text-center items-center w-full p-4 flex gap-1`}>
        {Icon &&  <Icon className="h-6 w-6"/>}
        <div className="font-semibold">
          {title}
        </div>
      </div>
    </a>
  );
}