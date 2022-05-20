import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import SetUsername from "./SetUsername";
import Bar from "../public/Bar";
import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { c1, c2 } from "../public/Info";
import { v4 as uuidv4 } from "uuid";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Show = () => {
  const { group } = useParams();
  const location = useLocation();
  const item_arr = [];
  const [uid, setUid] = useState("");
  const signed = location.state === null ? true : location.state.signed;
  let group_now = group === "c1" ? c1 : c2;
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);

  for (const group in group_now) {
    item_arr.push(
      <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
        <ProjectCard
          name={group_now[group].name}
          description={group_now[group].description}
          img_url={group_now[group].img_url}
          uid={uid}
          signed={signed}
        />
      </Grid>
    );
  }
  // update(ref(db, `projects/c2`), {
  //   [group_now[group].name]: {
  //     comment: {},
  //     name: group_now[group].name,
  //     total: 0,
  //   },
  // });

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
};

export default Show;
