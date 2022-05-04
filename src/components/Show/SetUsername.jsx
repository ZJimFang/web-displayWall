import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getDatabase, ref, update } from "firebase/database";

function storeUsername(id, username) {
  const db = getDatabase();
  update(ref(db, `users/${id}`), {
    username: username,
  });
}

const SetUsername = ({ uid }) => {
  const [id, setId] = useState(uid);

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
        storeUsername(id, value);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  });
};

export default SetUsername;
