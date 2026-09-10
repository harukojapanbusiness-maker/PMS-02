import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  role: 'owner' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hardcoded credentials (in production, use backend authentication)
const CREDENTIALS = {
  owner: {
    username: 'owner',
    password: 'PMS@Owner2025',
    role: 'owner' as const
  },
  admin: {
    username: 'admin',
    password: 'PMS@Admin2025',
    role: 'admin' as const
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('pms_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username: string, password: string): boolean => {
    if (username === CREDENTIALS.owner.username && password === CREDENTIALS.owner.password) {
      const userData = { username: CREDENTIALS.owner.username, role: CREDENTIALS.owner.role };
      setUser(userData);
      localStorage.setItem('pms_user', JSON.stringify(userData));
      return true;
    }
    if (username === CREDENTIALS.admin.username && password === CREDENTIALS.admin.password) {
      const userData = { username: CREDENTIALS.admin.username, role: CREDENTIALS.admin.role };
      setUser(userData);
      localStorage.setItem('pms_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pms_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
