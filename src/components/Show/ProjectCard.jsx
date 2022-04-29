import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import ReactStars from "react-rating-stars-component";
import { Link as RouterLink } from "react-router-dom";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

export default function ProjectCard({ name, description, img_url }) {
  console.log(name);
  return (
    <Card sx={{ minWidth: "350px", backgroundColor: "#C8C2AE" }}>
      <CardActionArea component={RouterLink} to={`/frame/${name}`}>
        <CardMedia component="img" height="200px" image={img_url} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" my={1}>
          {description}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
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
