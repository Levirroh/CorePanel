interface ActionProps {
  url?: string,
  title?: string,
  color: string,
  borderColor: string,
  textColor: string,
  Icon?: React.ElementType,
}


export default function ActionButton({ url, title, color, textColor, borderColor, Icon }: ActionProps) {
  return (
    <a href={url || "javascript:void(0);"} className="flex justify-center items-center">
      <div className={`bg-none rounded-xl ${color} ${textColor} text-sm text-center items-center p-4 gap-1 h-32 w-32 border-2 ${borderColor}
       flex flex-col justify-center hover:scale-105 transition-transform duration-200 shadow-lg`}>
        <div className={`font-semibold  ${textColor}`}>
          {title || <Icon className={`h-6 w-6`}/>}
        </div>
      </div>
    </a>
  );
}