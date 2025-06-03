import { useContext } from "react";
import UserContext from "../../context/UserContext/userContext";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  const isAuth = user ? true : false;
  return <>{isAuth ? <Outlet /> : <Navigate to={"/login"} replace={true} />}</>;
};

export default ProtectedRoute;
