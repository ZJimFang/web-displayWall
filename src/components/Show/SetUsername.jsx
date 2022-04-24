import React from "react";
import Swal from "sweetalert2";
import { getDatabase, ref, set } from "firebase/database";

function storeUsername(email, uid, displayName, username, photoURL) {
  const db = getDatabase();
  set(ref(db, "users/" + uid), {
    displayName: displayName,
    email: email,
    username: username,
    photoURL: photoURL,
  });
}

const SetUsername = ({ email, displayName, uid, photoURL }) => {
  return (
    <>
      {Swal.fire({
        title: "Submit your username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Confirm",
        showLoaderOnConfirm: true,
        preConfirm: (value) => {
          storeUsername(email, uid, displayName, value, photoURL);
        },
        allowOutsideClick: () => !Swal.isLoading(),
      })}
    </>
  );
};

export default SetUsername;
