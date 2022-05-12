import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { getDatabase, ref, onValue } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const Comments = ({ name }) => {
  const [comments, setComments] = useState();
  const { group } = useParams();
  const db = getDatabase();
  let comments_arr = [];

  //get this project's all comments
  useEffect(() => {
    onValue(ref(db, `projects/${group}/${name}`), (snapshot) => {
      const data = snapshot.val();
      setComments(data.comment);
    });
  }, []);

  //show the comments if exists
  if (comments !== undefined) {
    for (const key of Object.keys(comments)) {
      comments_arr.push(
        <div key={uuidv4()}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>{key}</h4>
              <p style={{ textAlign: "left" }}>{comments[key]}</p>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "10px 0" }} />
        </div>
      );
    }
  }
  return <>{comments_arr.map((comment) => comment)}</>;
};

export default Comments;
