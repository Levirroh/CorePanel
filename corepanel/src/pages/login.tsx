export default function Login() {
  return (
    <div className="w-screen h-screen bg-linear-to-tr from-slate-950 from-60% to-orange-700 bg-size-[200%_200%] animate-gradient text-slate-300
      flex items-center justify-center">
      <div className="flex flex-col h-[60vh] w-[22vw] rounded-4xl bg-slate-700/8 text-center p-5 items-center gap-6">
        <div className="flex flex-col w-full">
          <p className="text-sm">Seja Bem-vindo ao</p>
          <div className="flex justify-center text-center w-full text-shadow-slate-950 text-shadow-sm">
            <p className="font-semibold text-5xl text-slate-700">Core</p>
            <p className="font-bold text-5xl text-orange-800">Panel</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full text-left">
            <label htmlFor="" className="text-xs">Username:</label>
            <input type="text" className="pl-3 bg-slate-400/5 pt-1 pb-2 rounded-md m-2 outline-none hover:scale-102 transition-all duration-100 text-slate-400" />
          </div>
          <div className="flex flex-col w-full text-left">
            <label htmlFor="" className="text-xs">Password:</label>
            <input type="password" className="pl-3 bg-slate-400/5 pt-1 pb-2 rounded-md m-2 outline-none hover:scale-102 transition-all duration-100 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}