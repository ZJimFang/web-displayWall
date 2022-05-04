import React from "react";
import { useParams, useLocation } from "react-router-dom";
import SetUsername from "./SetUsername";

import Bar from "../public/Bar";
import ProjectCard from "./ProjectCard";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import { c1, c2 } from "../public/Info";

import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";

function Show() {
  const { group } = useParams();
  const location = useLocation();

  const { uid } = getAuth().currentUser;
  const item_arr = [];
  const signed = location.state.signed;
  let group_now = group === "c1" ? c1 : c2;

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
      {!signed ? <SetUsername uid={uid}></SetUsername> : ""}

      <Bar signed={signed} />
      <Box sx={{ mt: "30px" }}>
        <Grid container spacing={3}>
          {item_arr.map((item) => item)}
        </Grid>
      </Box>
    </>
  );
}

export default Show;
