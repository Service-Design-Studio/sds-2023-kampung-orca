import React, {useState, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import { BarLoader } from 'react-spinners'; // You may need to install this library
import { useEffect } from "react";
import useAxios from "axios-hooks"

const Loading = () => {
  return (
    <div className="loading">
      <BarLoader /> {/* Replace this with your preferred loading indicator */}
      <p>Loading...</p> {/* Replace this with your preferred loading message */}
    </div>
  );
};



const useGateway_oauth = (endpoint, method, code) => {
  const url = `${process.env.REACT_APP_GATEWAY_URL}${endpoint}`;
  let [cache, setCache] = useState(null);
  const [{ data, loading, error }] = useAxios({
    url: url,
    params: { code: code },
    method: method
  });

  useMemo(() => {
    if (!loading && data && data.token) {
      setCache(data.token);
    }
  }, [loading, data]);

  return [cache, setCache, error];
};



const GoogleCallback = () => {
  const [link, setlink] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.href);
    
    setCode(params.get('code'));
    for (const key of params.keys()) {
      if (key.includes('/oauth/google?state')) {
        const value = params.get(key);
        setlink(value.replace('http://localhost:3000', ''));
        break;
        }
      }
  }, []);
  const [data] = useGateway_oauth("/users/signup", "Post", code);
  useEffect(() => {
    if (data) {
      Cookies.set("token", data);
      console.log(data);
      console.log(link);
      navigate(link);
    }
  }, [data, link, navigate]);

  if (!data) {
    return <Loading />;
  }

  return null;
};
  // useEffect(() => {
    
  //   const params = new URLSearchParams(window.location.href);
  //   try {
  //     const tokens = await axios.post("users/signup", {
  //       code: params.get('code'),
  //     });
  //     console.log(tokens);
  //     Cookies.set("token", tokens.data["token"]);
  //     navigate("/curriculum/topic");
  //   } catch (error) {
  //     console.log(error.response.status);
  //   }
  // })



export default GoogleCallback;