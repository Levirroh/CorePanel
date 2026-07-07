import { useNavigate } from "react-router-dom";

export function validateSession() {
  const navigate = useNavigate();
  const value = sessionStorage.getItem("acessType");
  console.log(value)
  if (value == null) {
    setTimeout(() => { 
      navigate('/login');
    }, (200));
  }
  return value;

}