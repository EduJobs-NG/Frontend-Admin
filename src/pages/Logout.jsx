import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";

import useLogout from "../hooks/useLogout";
import bgImage from "../assets/logout-image.png";

export const Logout = () => {
  const [isPositive, setIsPositive] = useState(null);
  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    if (isPositive === "yes") handleLogout();
    else if (isPositive === "no") navigate(-1);
  }, [isPositive]);

  return (
    <div
      className={`flex justify-center items-center h-[100%] bg-[${bgImage}] bg-no-repeat bg-center bg-cover`}
    >
      <Alert
        title="LOGOUT"
        text="Are you sure you want to logout?"
        setIsPositive={setIsPositive}
      />
    </div>
  );
};
