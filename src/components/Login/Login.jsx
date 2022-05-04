import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { rate_table } from "../public/Info";
import "../../styles/effect.scss";

import { authentication } from "../../configs/firebase-config";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function readUserData(db) {
  const userEmail_Arr = [];
  onValue(ref(db, "users/"), (snapshot) => {
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
  const navigate = useNavigate();
  const userEmail_Arr = readUserData(db);

  const signInWithGoogle = () => {
    let signed = false;
    const provider = new GoogleAuthProvider();

    signInWithPopup(authentication, provider)
      .then((data) => {
        const { displayName, email, uid } = data.user;
        userEmail_Arr.map((userEmail) => {
          if (email === userEmail) signed = true;
        });

        if (!signed) {
          update(ref(db, `users/${uid}`), {
            displayName: displayName,
            email: email,
            rate: rate_table,
          });
        }

        return signed;
      })
      .then((signed) => {
        navigate("/show/c1", { state: { signed: signed } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="BoxEffect">
        <Box sx={{ mb: 2, zIndex: 20 }}>
          <Button variant="contained" onClick={signInWithGoogle}>
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
            to={"/show/c1"}
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
    </Box>
  );
};

export default Login;
