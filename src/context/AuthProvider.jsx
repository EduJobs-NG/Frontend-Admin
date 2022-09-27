import { useState, createContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(
    localStorage.getItem('persist') || 'yes'
  );
  const [userData, setUserData] = useState({});

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, persist, setPersist, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
