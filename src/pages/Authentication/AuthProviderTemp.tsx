import { createContext, ReactNode, useState } from 'react';

interface User {
  id: number;
  username: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  currentUser: User | null;
  authenticate: (user: User) => void;
  signout: () => void;
}

// Initialize the context with an undefined value
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

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
};

export { AuthProvider, AuthContext };
