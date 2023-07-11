import React, { useContext, useEffect, useState } from "react";

import Cookies from "js-cookie";

const useCookie = (key, initialValue) => {
  const [value, setValue] = useState(Cookies.get(key) ?? initialValue);

  useEffect(() => {
    Cookies.set(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useCookie;
