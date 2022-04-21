import React, { useState } from "react";
import { getAuth } from "firebase/auth";

const Setting = () => {
  const [logIn, setLogIn] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    setLogIn(true);
  } else {
    setLogIn(false);
  }

  return <div>setting</div>;
};

export default Setting;
