import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = checkUser();


  function checkUser() {
    const value = sessionStorage.getItem("acessType");
    console.log(value)
    if (value == null) {
      console.log("voltou?");
      setTimeout(() => { // so that React can load everything in time 
        navigate('/login'); 
      }, (200));
    }
    return value;
  }


  return (
    <div>
      {user}
      HOME
    </div>
  );
}