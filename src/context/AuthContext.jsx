import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Mock login function
  const login = (email, password) => {
    // In a real app, this would be an API call
    if (email && password) {
      setUser({
        name: email.split('@')[0],
        email: email
      });
      return true;
    }
    return false;
  };

  // Mock register function
  const register = (name, email, password) => {
    // In a real app, this would be an API call
    if (name && email && password) {
      setUser({
        name: name,
        email: email
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
