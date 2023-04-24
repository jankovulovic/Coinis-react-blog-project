import React from "react";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "../SpecificPost/PostId.module.css";

const PostId = () => {
  const { posts } = useContext(AppContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <h1 className={classes.head}>Blog post NOT FOUND!</h1>;
  }

  return (
    <>
      <div className={classes.head}>
        <div className={classes.title}>
          <div>{post.title}</div>
        </div>
        <div className={classes.imageDiv}>
          <img src={post.imageUrl} alt={post.title} />
        </div>
        <div className={classes.author}>
          <h6>Created by : {post.author}</h6>
        </div>
        <div className={classes.text}>
          <p>{post.text}</p>
        </div>
      </div>
    </>
  );
};

export default PostId;
