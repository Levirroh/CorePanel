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
      <div className={`bg-none rounded-xl ${color} ${textColor} text-sm text-center items-center p-2 gap-1 h-36 w-40 border-0 ${borderColor + "/80"} flex flex-col justify-center hover:scale-103 transition-transform duration-200 shadow-lg`}>
        <div className={`font-semibold flex flex-col items-center`}>
          {Icon && (
            <Icon className={`h-12 w-12 ${textColor}`} />
          )}
          <p className={`font-semibold text-[20px] ${textColor}`}>{title}</p>
          <p className="text-slate-800 font-medium">{desc}</p>
        </div>
      </div>
    </a>
  );
}