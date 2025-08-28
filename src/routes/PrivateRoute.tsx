import type { ReactNode } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router";
interface PrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to={"/login"} />;
};
export default PrivateRoute;
