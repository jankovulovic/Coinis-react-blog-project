import * as React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import classes from "../Post/Post.module.css";

export const Post = ({ id, title, author, imageUrl, text }) => {
  return (
    <Card className={classes.card} sx={{ maxWidth: 345 }} key={id}>
      <CardMedia component="img" height="300" image={imageUrl} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          className={classes.author}
        >
          Author : {author}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.text}
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/post/${id}`}>
          <Button size="small" className={classes.btn}>
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
