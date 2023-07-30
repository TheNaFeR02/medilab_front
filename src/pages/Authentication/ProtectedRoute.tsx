import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, RouteProps, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import DefaultLayout from '../../layout/DefaultLayout';


const ProtectedRoute: React.FC<RouteProps> = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const revalidateUser = async () => {  

      try {
        const response = await fetch('http://127.0.0.1:8000/auth/revalidate-user/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Token ${localStorage.getItem("token")}`,
          },
          credentials: 'include',
        });
        if (response.ok) {
          const user = await response.json();
          console.log('PR: user ->', user);

          console.log('Before auth', authContext);
          authContext.authenticate(user);
          console.log('After auth', authContext);
        }
      } catch (err) {
        console.error(err);
        authContext.signout();
      }
    };

    revalidateUser();
  }, []);

  useEffect(() => {
    console.log('Auth context changed', authContext);
  }, [authContext]);

  // return authContext?.isAuthenticated ? (
  //   // <Routes>
  //   //   <Route path="/empresa/inicio" element={<DefaultLayout pageName='Empresa' children={undefined} />} />
  //   // </Routes>
  //   <Navigate to="/empresa/inicio" replace />

  // ) : (
  //   <Navigate to="/iniciar_sesion" replace />
  // );
  return <DefaultLayout pageName='Empresa' children={undefined} />
}

export default ProtectedRoute;
