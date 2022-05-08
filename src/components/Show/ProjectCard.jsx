import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import Rating from "@mui/material/Rating";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";

import { Link as RouterLink } from "react-router-dom";
import {
  getDatabase,
  ref,
  onValue,
  get,
  set,
  update,
  child,
} from "firebase/database";
import { getAuth } from "firebase/auth";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../styles/popup.scss";

import Comments from "./Comments";

//update user's star
function update_user(db, uid, name, star) {
  update(ref(db, `users/${uid}/rate/${name}`), {
    score: star,
  });
}

//update leader table
function update_project(name, value, star) {
  const db = getDatabase();
  const dbRef = ref(getDatabase());
  get(child(dbRef, `projects/${name}`)).then((snapshot) => {
    const data = snapshot.val();
    let { total } = data;
    total -= star;
    total += value;
    update(ref(db, `projects/${name}`), {
      total: total,
    });
  });
}

export default function ProjectCard({
  name,
  description,
  img_url,
  uid,
  signed,
}) {
  const [star, setStar] = useState(0);
  const [message, setMessage] = useState("");
  const db = getDatabase();
  const onChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const store_message = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `users/${uid}`))
      .then((snapshot) => {
        const data = snapshot.val();
        return data.displayName;
      })
      .then((displayName) => {
        update(ref(db, `projects/${name}/comment`), {
          [displayName]: message,
        });
      });
  };

  useEffect(() => {
    onValue(ref(db, `users/${uid}/rate/${name}`), (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        const { score } = data;
        setStar(score);
      }
    });
  }, []);

  // update(ref(db, "projects/" + name), {
  //   total: 0,
  //   comment: {
  //     1082022: "Hi",
  //     1082023: "Hi bro",
  //     1082024: "Hiii",
  //   },
  // });

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
        {signed === "visiter" ? (
          ""
        ) : (
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
                update_project(name, value, star);
              }}
            />
            <Popup
              trigger={<CommentTwoToneIcon sx={{ cursor: "pointer" }} />}
              modal
              nested
            >
              <Paper
                style={{
                  padding: "30px 20px",
                  border: "1px solid black",
                  height: "300px",
                  overflow: "auto",
                }}
              >
                <Comments name={name} />
              </Paper>
              <Stack spacing={1} direction="row" sx={{ margin: "20px 0" }}>
                <TextField
                  fullWidth
                  label="Comment"
                  id="fullWidth"
                  onChange={onChangeHandler}
                />
                <Button variant="contained" onClick={store_message}>
                  Send
                </Button>
              </Stack>
            </Popup>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}
