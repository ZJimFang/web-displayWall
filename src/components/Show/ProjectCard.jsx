import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import Rating from "@mui/material/Rating";
import { Link as RouterLink } from "react-router-dom";
import {
  getDatabase,
  ref,
  onValue,
  get,
  update,
  child,
} from "firebase/database";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//update user's star
function update_user(db, uid, name, star) {
  update(ref(db, `users/${uid}/rate/${name}`), {
    score: star,
  });
}

//update leader table
function update_project(name, star) {
  const db = getDatabase();
  const dbRef = ref(getDatabase());
  get(child(dbRef, `projects/${name}`)).then((snapshot) => {
    const data = snapshot.val();
    let { total } = data;
    total += star;
    update(ref(db, `projects/${name}`), {
      total: total,
    });
  });
}

export default function ProjectCard({ auth, name, description, img_url }) {
  const [star, setStar] = React.useState(0);
  const db = getDatabase();
  const uid = auth.currentUser.uid;
  // update(ref(db, "projects/" + name), {
  //   total: 0,
  // });

  //bug
  useEffect(() => {
    if (auth.currentUser != null) {
      onValue(ref(db, `users/${uid}/rate/${name}`), (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          const { score } = data;
          setStar(score);
        }
      });
    }
  }, [star]);

  return (
    <Card sx={{ minWidth: "350px", backgroundColor: "#C8C2AE" }}>
      <CardActionArea component={RouterLink} to={`/frame/${name}`}>
        <CardMedia component="img" height="200px" image={img_url} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          my={1}
          sx={{ height: "40px", overflow: "auto" }}
        >
          {description}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Rating
            name="size-large"
            value={star}
            onChange={(event, value) => {
              update_user(db, uid, name, value);
              update_project(name, value);
            }}
          />
          <Popup
            trigger={<CommentTwoToneIcon sx={{ cursor: "pointer" }} />}
            modal
          >
            <span> Modal content </span>
          </Popup>
        </Grid>
      </CardContent>
    </Card>
  );
}
