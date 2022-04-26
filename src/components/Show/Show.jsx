import React, { useContext } from "react";
import { UserContext } from "../UserContext";

import SetUsername from "./SetUsername";
import Bar from "./Bar";
import ProjectCard from "./ProjectCard";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import { c1, c2 } from "./Info";

import { v4 as uuidv4 } from "uuid";
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
  const item_arr = [];
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
  for (const group in c1) {
    console.log(c1[group]);
    item_arr.push(
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        key={uuidv4()}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProjectCard
          name={c1[group].name}
          description={c1[group].description}
        />
      </Grid>
    );
  }

  return (
    <>
      {setUsername}
      <Bar />

      <Box sx={{ mt: "100px" }}>
        <Grid container spacing={3}>
          {item_arr.map((item) => item)}
        </Grid>
      </Box>
    </>
  );
};

export default Show;
