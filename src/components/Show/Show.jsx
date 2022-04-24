import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

import SetUsername from "./SetUsername";
import Bar from "./Bar";
import Album from "./Album";
// const auth = getAuth();
// const user = auth.currentUser;

// if (user) {
//   setLogIn(true);
// } else {
//   setLogIn(false);
// }

const Show = () => {
  const { userInfo } = useContext(UserContext);
  const { status, email, displayName, uid, photoURL } = userInfo;
  let setUsername = null;
  if (!status && email !== undefined) {
    setUsername = (
      <SetUsername
        email={email}
        displayName={displayName}
        uid={uid}
        photoURL={photoURL}
      />
    );
  }

  return (
    <>
      {setUsername}
      <Bar />
    </>
  );
};

export default Show;
