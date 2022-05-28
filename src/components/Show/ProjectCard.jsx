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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../styles/popup.scss";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import {
  getDatabase,
  ref,
  onValue,
  get,
  update,
  child,
} from "firebase/database";

//update user's star
function update_user(db, uid, name, click_value, star_now, group) {
  if (click_value === null) return;
  update(ref(db, `users/${uid}/rate/${name}`), {
    score: click_value,
  });

  update_project(name, click_value, star_now, group);
}

//update leader table
function update_project(name, click_value, star_now, group) {
  if (star_now === null) return;
  const db = getDatabase();
  const dbRef = ref(getDatabase());
  get(child(dbRef, `projects/${group}/${name}`)).then((snapshot) => {
    const data = snapshot.val();
    let { total } = data;
    total -= star_now;
    total += click_value;
    update(ref(db, `projects/${group}/${name}`), {
      total: total,
    });
  });
}

const ProjectCard = ({ name, description, img_url, uid, signed }) => {
  const [star_now, setStar_now] = useState(0);
  const [message, setMessage] = useState("");
  const db = getDatabase();
  const { group } = useParams();
  const onChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  //store message into db
  function store_message() {
    get(child(ref(getDatabase()), `users/${uid}`))
      .then((snapshot) => {
        const data = snapshot.val();
        console.log(data);
        return data.username;
      })
      .then((username) => {
        update(ref(db, `projects/${group}/${name}/comment`), {
          [username]: message,
        });
      });
    document.getElementById("fullWidth").value = "";
  }

  //load the star
  useEffect(() => {
    onValue(ref(db, `users/${uid}/rate/${name}`), (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        const { score } = data;
        setStar_now(score);
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
        <CardMedia
          component="img"
          height="200px"
          image={require(`../../images/${img_url}`)}
        />
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
              value={star_now}
              onChange={(event, click_value) => {
                update_user(db, uid, name, click_value, star_now, group);
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
};

export default ProjectCard;
