import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Reception from './pages/Receptions/Reception';
import CreateReception from './pages/Receptions/CreateReception';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoutes from './pages/Authentication/ProtectedRoute';
import { AuthProvider } from './pages/Authentication/AuthProvider';
import { Auth } from './pages/Authentication/Auth';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <AuthProvider>
      <Routes>
        {/* -------------------------  Protected Routes ------------------------- */}
        <Route element={<Auth allowedRoles={["Doctor"]}/>}>
          <Route path="/doctor/inicio" element={<DefaultLayout pageName='Doctor' children={undefined} />}/>
        </Route>
        <Route element={<Auth allowedRoles={['Patient']}/>}>
          <Route path="/paciente/inicio" element={<DefaultLayout pageName='Paciente' children={undefined} />}/>
        </Route>
        <Route element={<Auth allowedRoles={["Company"]}/>}>
          <Route path="/empresa/inicio" element={<DefaultLayout pageName='Empresa' children={undefined} />}/>
        </Route>
        <Route element={<Auth allowedRoles={["Bacteriologist"]}/>}>
          <Route path="/bacteriologo/inicio" element={<DefaultLayout pageName='Bacteriólogo' children={undefined} />}/>
        </Route>
        <Route element={<Auth allowedRoles={["Receptionist"]}/>}>
          <Route path="/recepcionista/inicio" element={<DefaultLayout pageName='Recepcionista' children={undefined} />}/>
        </Route>
        <Route element={<Auth allowedRoles={["Brigade"]}/>}>
          <Route path="/brigadista/inicio" element={<DefaultLayout pageName='Brigadista' children={undefined} />}/>
        </Route>
        {/* --------------------------------------------------------------------- */}

        {/* ------------------------- Some Routes ------------------------- */}
        
        
        {/* <Route>
        <Route path="/empresa/inicio" element={<DefaultLayout pageName='Empresa' children={undefined} />}/>
        </Route> */}
        <Route path="/recepcion" element={<Reception />} />
        <Route path="/recepcion/nueva" element={<CreateReception />} />
        <Route path="/iniciar_sesion" element={<SignIn />} />
        <Route path="/registrarse" element={<SignUp />} />
        {/* --------------------------------------------------------------- */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
