interface ActionProps {
  url?: string,
  title?: string,
  desc?: string,
  color: string,
  borderColor: string,
  textColor: string,
  Icon?: React.ElementType,
}


export default function ActionButton({ url, title, desc, color, textColor, borderColor, Icon }: ActionProps) {
  return (
    <a href={url || "javascript:void(0);"} className="flex justify-center items-center">
      <div className={`bg-none rounded-xl ${color} ${textColor} text-sm text-center items-center p-4 gap-1 h-36 w-40 border ${borderColor}
       flex flex-col justify-center hover:scale-105 transition-transform duration-200 shadow-xl`}>
        <div className={`${textColor} flex flex-col items-center justify-evenly h-full`}>
          <div className="flex">
            {Icon && (
              <Icon className={`h-14 w-14 ${textColor}`} />
            )}

          </div>
          <div className="flex flex-col">
            <p className="text-[0.9vw] font-semibold">{title}</p>
            <p className="font-semibold text-[0.6vw] text-slate-700">{desc}</p>

          </div>
        </div>
      </div>
    </a>
  );
}