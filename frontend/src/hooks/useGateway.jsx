import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import { useNavigate } from "react-router";
import useCookie from "./useCookie";

const useGateway = (endpoint) => {
  const url = `${process.env.REACT_APP_GATEWAY_URL}${endpoint}`;
  const navigate = useNavigate();
  const [cache, setCache] = useState(null);
  const [cookie] = useCookie("token");
  const [{ data, loading, error }] = useAxios({
    url: url,
    params: { token: cookie },
    method: "POST",
  });
  useEffect(() => {
    if (error) {
      return navigate("/error");
    }
    if (!loading) {
      if (!cookie) return navigate("/loginerror", { replace: true });
      if (data) setCache(data.data);
    }
  }, [cookie, data, error, loading, navigate]);
  return [cache, setCache];
};

export default useGateway;
