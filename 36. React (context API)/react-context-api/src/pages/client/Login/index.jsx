import { useContext } from "react";
import UserContext from "../../../context/UserContext/userContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-full w-full">
      <button
        onClick={() => {
          login({ id: "1", username: "johnathan" });
          navigate("/books");
        }}
        className="bg-amber-500 mt-12 rounded cursor-pointer text-white font-bold hover:bg-amber-700 transition px-6 py-2"
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
