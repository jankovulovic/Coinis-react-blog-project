import React, { useContext } from "react";

import { AppContext } from "../../App";
import { Post } from "../../components/Post/Post";

import classes from "./Home.module.css";

export const Home = () => {
  const { posts } = useContext(AppContext);

  return (
    <>
      <div className={classes.title}>
        <h1>All posts</h1>
        <div className={classes.allPosts}>
          {posts.map((item) => (
            <div className={classes.card} key={item.id} id={item.id}>
              <Post
                id={item.id}
                title={item.title}
                author={item.author}
                imageUrl={item.imageUrl}
                text={item.text}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
