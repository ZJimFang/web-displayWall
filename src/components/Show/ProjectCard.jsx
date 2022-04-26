import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ name, description }) {
  return (
    <Card sx={{ minWidth: "350px", backgroundColor: "#C8C2AE" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image="https://imgv3.fotor.com/images/homepage-feature-card/%E4%B8%80%E9%8D%B5%E7%BE%8E%E5%8C%96%E7%85%A7%E7%89%87.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
