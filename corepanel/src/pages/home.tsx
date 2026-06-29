import { useNavigate } from "react-router-dom";
import { validateSession } from "../../public/helpers/session_helper.tsx"

export default function Home() {
  const navigate = useNavigate();
  const user = validateSession();


  return (
    <div>
      {user}
      HOME
    </div>
  );
}