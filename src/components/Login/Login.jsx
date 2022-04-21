import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import "../../styles/effect.scss";

import { authentication } from "../../configs/firebase-config";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function writeUserData(db, name, email) {
  push(ref(db, "user/"), {
    username: name,
    email: email,
  });
}

function readUserData(db) {
  const userEmail_Arr = [];
  onValue(ref(db, "user/"), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      Object.values(data).map((user) => {
        userEmail_Arr.push(user.email);
      });
    }
  });
  return userEmail_Arr;
}

const Login = () => {
  const db = getDatabase();
  const userEmail_Arr = readUserData(db);
  const [goto, setGoto] = useState("show");

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    let signed = false;
    signInWithPopup(authentication, provider)
      .then((data) => {
        userEmail_Arr.map((userEmail) => {
          if (data.user.email === userEmail) signed = true;
        });
        if (!signed) {
          setGoto("setting");
          writeUserData(db, data.user.displayName, data.user.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className="BoxEffect">
      <Box sx={{ mb: 2, zIndex: 20 }}>
        <Button
          variant="contained"
          onClick={signInWithGoogle}
          component={RouterLink}
          to={`/${goto}`}
        >
          <Box
            sx={{
              p: 1,
              mr: 2,
              my: 0.5,
              bgcolor: "white",
              borderRadius: "50%",
            }}
          >
            <Avatar src={"https://freesvg.org/img/1534129544.png"} />
          </Box>
          <span>Log in with Google</span>
        </Button>
      </Box>

      <Box sx={{ zIndex: 20 }}>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to={"/show"}
        >
          <Box
            sx={{
              p: 1,
              mr: 2,
              my: 0.5,
              bgcolor: "#BDBDBD",
              borderRadius: "50%",
            }}
          >
            <Avatar />
          </Box>
          <span>Log in with visiter</span>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
