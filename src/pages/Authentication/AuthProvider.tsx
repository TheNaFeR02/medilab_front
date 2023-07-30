import { createContext, ReactNode, useState } from 'react';

interface User {
  username: string;
  role: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  currentUser: User | null;
  authenticate: (user: User) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  currentUser: null,
  authenticate: () => { },
  signout: () => { },
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const authenticate = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const signout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, authenticate, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };