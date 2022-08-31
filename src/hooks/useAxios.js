import { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const makeRequest = async ({ url, method = "GET", payload = null }) => {
    setSuccess(false);
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await axiosPrivate.request({
        method,
        url,
        data: payload,
      });

      setSuccess(true);
      setErrorMessage("");
      setData(response.data);
    } catch (error) {
      error.response?.data?.detail
        ? setErrorMessage(error.response?.data?.detail)
        : setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return () => ({
    data,
    success,
    errorMessage,
    setErrorMessage,
    isLoading,
    makeRequest,
  });
};

export default useAxios;
