import React, { useContext } from "react";
import { getAuth } from "firebase/auth";
import { UserContext } from "../UserContext";

const Show = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  // const [logIn, setLogIn] = useState(false);
  // const auth = getAuth();
  // const user = auth.currentUser;

  // if (user) {
  //   setLogIn(true);
  // } else {
  //   setLogIn(false);
  // }

  return <div>{userInfo.name}</div>;
};

export default Show;
