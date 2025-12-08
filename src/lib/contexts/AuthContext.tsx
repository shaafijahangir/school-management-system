import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthUser, UserRole, Tenant } from '../types';
import { mockStudents, mockTeachers, mockAdmins, mockTenants } from '../mock-data';
import { DEFAULT_TENANT } from '../config';

interface AuthContextType {
  user: AuthUser | null;
  tenant: Tenant;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithMicrosoft: () => Promise<void>;
  loginDemo: (role: UserRole) => void;
  logout: () => void;
  setTenant: (tenant: Tenant) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [tenant, setTenant] = useState<Tenant>(DEFAULT_TENANT);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    const storedTenant = localStorage.getItem('auth_tenant');
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('auth_user');
      }
    }
    
    if (storedTenant) {
      try {
        setTenant(JSON.parse(storedTenant));
      } catch (error) {
        console.error('Failed to parse stored tenant:', error);
      }
    }
    
    setIsLoading(false);
  }, []);

  // Mock login with email/password (for demo)
  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find user in mock data
    const allUsers = [...mockStudents, ...mockTeachers, ...mockAdmins];
    const foundUser = allUsers.find(u => u.email === email);
    
    if (!foundUser) {
      setIsLoading(false);
      throw new Error('Invalid credentials');
    }
    
    const authUser: AuthUser = {
      ...foundUser,
      tenantId: tenant.id,
      authProvider: 'demo',
    };
    
    setUser(authUser);
    localStorage.setItem('auth_user', JSON.stringify(authUser));
    setIsLoading(false);
  };

  // Mock Microsoft OAuth login
  const loginWithMicrosoft = async (): Promise<void> => {
    setIsLoading(true);
    
    // Simulate OAuth redirect and callback
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo, log in as the first student with Microsoft auth
    const mockUser = mockStudents[0];
    const authUser: AuthUser = {
      ...mockUser,
      tenantId: tenant.id,
      authProvider: 'microsoft',
      microsoftId: 'mock-microsoft-id-' + mockUser.id,
    };
    
    setUser(authUser);
    localStorage.setItem('auth_user', JSON.stringify(authUser));
    setIsLoading(false);
  };

  // Demo login (select role directly)
  const loginDemo = (role: UserRole): void => {
    let mockUser;
    
    switch (role) {
      case 'student':
        mockUser = mockStudents[0];
        break;
      case 'teacher':
        mockUser = mockTeachers[0];
        break;
      case 'admin':
        mockUser = mockAdmins[0];
        break;
      default:
        return;
    }
    
    const authUser: AuthUser = {
      ...mockUser,
      tenantId: tenant.id,
      authProvider: 'demo',
    };
    
    setUser(authUser);
    localStorage.setItem('auth_user', JSON.stringify(authUser));
  };

  // Logout
  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  // Update tenant
  const updateTenant = (newTenant: Tenant): void => {
    setTenant(newTenant);
    localStorage.setItem('auth_tenant', JSON.stringify(newTenant));
  };

  const value: AuthContextType = {
    user,
    tenant,
    isAuthenticated: !!user,
    isLoading,
    login,
    loginWithMicrosoft,
    loginDemo,
    logout,
    setTenant: updateTenant,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

