interface Props {
  messages: string[], title: string
}

export default function Message({messages, title}: Props) {

  return (
    <div className={"bg-slate-600/30 text-white text-sm absolute p-2 bottom-5 left-5 rounded-xl gap-1 flex flex-col hover:scale-105 duration-100 shadow-md shadow-black"}>
      <p className="font-semibold">
        {title}
      </p>
      {messages.map((message) => {
        return (
          <div>
            <p className="pl-2">
              {message}
            </p>
          </div>
        )
      })}

    </div>
  );
}