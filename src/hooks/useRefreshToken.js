import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh");
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.post("/token/refresh/", {
      refresh: refreshToken,
    });

    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.access,
      };
    });
    localStorage.setItem("refresh", response.data.refresh);

    return response?.data?.access;
  };

  return refresh;
};

export default useRefreshToken;
