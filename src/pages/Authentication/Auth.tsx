import { useContext, useEffect, useMemo } from "react";
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
  });

  // By using useMemo we are ensuring that the finding in the array roles 
  // only happens when any of the two changes and not every time this component re-renders.
  const userHasRole = useMemo(() => 
    allowedRoles.some((role: string) => authContext.currentUser?.role.includes(role)), 
    [allowedRoles, authContext.currentUser]
  );
  // const userHasRole = allowedRoles.some((role: string) => authContext.currentUser?.role.includes(role));
  // console.log('isauthenticated', authContext.isAuthenticated);
  // console.log('userhasrole', userHasRole);

  if (!authContext.isAuthenticated || !userHasRole) {
    return <Navigate to="/iniciar_sesion" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export { Auth };
