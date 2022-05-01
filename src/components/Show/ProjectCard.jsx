import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import Rating from "@mui/material/Rating";
import { Link as RouterLink } from "react-router-dom";
import { getDatabase, ref, onValue, update } from "firebase/database";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function update_database(auth, name, star) {
  const uid = auth.currentUser.uid;
  const db = getDatabase();
  //update user's star
  update(ref(db, `users/${uid}/rate/${name}`), {
    score: star,
  });

  //update leader table
  // onValue(ref(db, `projects/${name}`), (snapshot) => {
  //   const data = snapshot.val();
  //   let { score, total } = data;
  //   score *= total;
  //   score += star;
  //   total += 1;
  //   score /= total;
  //   update(ref(db, `projects/${name}`), {
  //     score: score,
  //     total: total,
  //   });
  // });
}

export default function ProjectCard({ auth, name, description, img_url }) {
  const [star, setStar] = React.useState(0);
  const db = getDatabase();
  // update(ref(db, "projects/" + name), {
  //   score: 0,
  //   comment: {},
  //   total: 0,
  // });

  //bug
  useEffect(() => {
    if (auth.currentUser != null) {
      const uid = auth.currentUser.uid;
      onValue(ref(db, `users/${uid}/rate/${name}`), (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          const { score } = data;
          setStar(score);
        }
      });
    }
  });

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
              update_database(auth, name, value);
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
