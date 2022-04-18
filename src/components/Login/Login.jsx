import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import "../../styles/effect.scss";

import { app } from "../../configs/firebase-config";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//判斷使用者是否登入
// const auth = getAuth();
// const user = auth.currentUser;
// if (user) {
//   console.log("log in");
// } else {
//   console.log("no");
// }

const Login = () => {
  const signInWithGoogle = () => {
    const authentication = getAuth(app);
    const database = getDatabase(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        push(ref(database, "/"), {
          username: re.user.displayName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box className="BoxEffect">
      <Box sx={{ width: "260px", mb: 2, zIndex: 20 }}>
        <Button variant="contained" sx={{ width: "100%" }}>
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

      <Box sx={{ width: "260px", zIndex: 20 }}>
        <Button variant="contained" color="secondary" sx={{ width: "100%" }}>
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
