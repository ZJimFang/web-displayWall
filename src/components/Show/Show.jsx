import React, { useContext } from "react";
import { UserContext } from "../public/UserContext";
import { useParams } from "react-router-dom";

import SetUsername from "./SetUsername";
import Bar from "../public/Bar";
import ProjectCard from "./ProjectCard";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import { c1, c2 } from "../public/Info";

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
  const { status, email, uid } = userInfo;
  const { group } = useParams();

  let setUsername = null;
  let group_now;
  const item_arr = [];
  if (!status && email !== undefined) {
    setUsername = <SetUsername uid={uid} />;
  }
  group_now = group === "c1" ? c1 : c2;
  for (const group in group_now) {
    item_arr.push(
      <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
        <ProjectCard
          name={group_now[group].name}
          description={group_now[group].description}
          img_url={group_now[group].img_url}
          uid={uid}
        />
      </Grid>
    );
  }
  return (
    <>
      {setUsername}
      <Bar />
      <Box sx={{ mt: "30px" }}>
        <Grid container spacing={3}>
          {item_arr.map((item) => item)}
        </Grid>
      </Box>
    </>
  );
};

export default Show;
