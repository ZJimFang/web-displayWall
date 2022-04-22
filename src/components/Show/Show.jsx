import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

import Swal from "sweetalert2";

// const auth = getAuth();
// const user = auth.currentUser;

// if (user) {
//   setLogIn(true);
// } else {
//   setLogIn(false);
// }
function storeUsername(email, uid, displayName, username) {
  const db = getDatabase();
  set(ref(db, "users/" + uid), {
    displayName: displayName,
    email: email,
    username: username,
  });
}

const Show = () => {
  const { userInfo } = useContext(UserContext);
  const { status, email, displayName, uid } = userInfo;
  if (!status && email !== undefined) {
    Swal.fire({
      title: "Submit your username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Confirm",
      showLoaderOnConfirm: true,
      preConfirm: (value) => {
        storeUsername(email, uid, displayName, value);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
  return <span>thank you! you have already give me your username</span>;
};

export default Show;
