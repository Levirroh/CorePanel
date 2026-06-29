import { useNavigate } from "react-router-dom";

export function validateSession() {
  const navigate = useNavigate();
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