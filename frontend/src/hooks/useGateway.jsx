import React, { useEffect, useMemo, useState } from "react";
import useAxios from "axios-hooks";
import { useNavigate } from "react-router";
import useCookie from "./useCookie";

const useGateway = (endpoint, method) => {
  const url = `${process.env.REACT_APP_GATEWAY_URL}${endpoint}`;
  const navigate = useNavigate();
  let [cache, setCache] = useState(null);
  let [cookie] = useCookie("token");
  let [{ data, loading, error }] = useAxios({
    url: url,
    params: { token: cookie },
    method: method
  });
  useMemo(() => {
    if (!loading) {
      if (!cookie) return navigate("/loginerror", { replace: true });
      if (data && data.data) setCache(data.data);
    }
  }, [data, cookie, loading, navigate]);
  return [cache, setCache, error];
};

export default useGateway;
