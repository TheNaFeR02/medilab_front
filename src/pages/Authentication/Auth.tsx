import { useContext, useEffect } from "react";
import { AuthContext } from './AuthProvider';
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthProps {
  allowedRoles: Array<string>;
}

const Auth = ({ allowedRoles }: AuthProps) => {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    console.log('Entró a Auth');
  }, []);

  const userHasRole = allowedRoles.some((role: string) => authContext.currentUser?.role.includes(role));

  console.log('isauthenticated', authContext.isAuthenticated);
  console.log('userhasrole', userHasRole);
  console.log(typeof authContext.currentUser?.role);


  if (!authContext.isAuthenticated || !userHasRole) {
    return <Navigate to="/iniciar_sesion" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export { Auth };
