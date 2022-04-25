import React, { useContext } from "react";
import { UserContext } from "../UserContext";

import SetUsername from "./SetUsername";
import Bar from "./Bar";
import ProjectCard from "./ProjectCard";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
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

      <Box sx={{ mt: "100px" }}>
        <Grid container spacing={3}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProjectCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Show;
