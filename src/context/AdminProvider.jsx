import { useState, createContext } from "react";

const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {
  const [expandManageUsers, setExpandManageUsers] = useState(false);
  const [expandDocuments, setExpandDocuments] = useState(false);

  return (
    <AdminContext.Provider
      value={{
        expandManageUsers,
        setExpandManageUsers,
        expandDocuments,
        setExpandDocuments,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
