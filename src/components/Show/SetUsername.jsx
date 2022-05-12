import { useEffect } from "react";
import Swal from "sweetalert2";
import { getDatabase, ref, update } from "firebase/database";

//store username into db
function storeUsername(uid, username) {
  const db = getDatabase();
  update(ref(db, `users/${uid}`), {
    username: username,
  });
}

//jump Swal for input username
const SetUsername = ({ uid }) => {
  useEffect(() => {
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
        storeUsername(uid, value);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  });
};

export default SetUsername;
