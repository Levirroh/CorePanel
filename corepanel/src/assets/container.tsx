interface PropsContainer {
  message: string,
}

export default function Container({ message }: PropsContainer) {

  return (
    <div className="bg-slate-300 rounded-4xl p-6 border-2 border-slate-400">
      <p>{message}</p>
    </div>
  );
}