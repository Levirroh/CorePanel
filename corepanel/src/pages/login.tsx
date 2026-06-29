import { useState } from "react";
import Message from "../assets/message";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  function checkCredentials() {
    if (!!username || !!!username || username.length == 0) return false
    if (!!password || !!!password || password.length == 0) return false
    return true;
  }

  function SubmitLogin() {
    if (!checkCredentials()) setError("Invalid Credentials...");

    //as there is no backend, this will be the validation.
    if ((username == password && username == "admin") || (username == password && username == "user")) {
      setError("")
      sessionStorage.setItem("acessType", username);
      navigate('/home')
    }
  }

  return (
    <div className="w-screen h-screen bg-linear-to-tr from-slate-950 from-60% to-orange-700 bg-size-[200%_200%] animate-gradient text-slate-300
      flex items-center justify-center">

      <Message title="Olá! Para realizar o login, utilize:" messages={["'admin' e 'admin' para entrar como Admin", "'user' e 'user' para entrar como User"]} />

      <div className="scale-110 md:scale-125 xl:scale-150 sm:scale-120 flex flex-col h-86 w-72 rounded-4xl bg-slate-700/8 text-center p-5 items-center gap-6">
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
            <input type="text" className="pl-3 bg-slate-400/5 pt-1 pb-2 rounded-md m-2 outline-none hover:scale-102 transition-all duration-100 text-slate-400" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex flex-col w-full text-left">
            <label htmlFor="" className="text-xs">Password:</label>
            <input type="password" className="pl-3 bg-slate-400/5 pt-1 pb-2 rounded-md m-2 outline-none hover:scale-102 transition-all duration-100 text-slate-400" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex flex-col w-full h-1/2 items-center justify-center text-left">
            <button className="flex w-3/4 h-3/5 bg-orange-800 text-center items-center justify-center font-bold rounded-2xl text-slate-400 shadow-2xs shadow-black" onClick={SubmitLogin}>Entrar</button>
          </div>
        </div>
        <p className="text-sm p-0 text-orange-600 mt-5">{error}</p>
      </div>
    </div>
  );
}