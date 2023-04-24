import React from "react";
import classes from "./Home.module.css";
import { AppContext } from "../../App";
import { useContext } from "react";
import { Post } from "../../components/Post/Post";

export const Home = () => {
  const { posts } = useContext(AppContext);

  return (
    <>
      <div className={classes.title}>
        <h1>Svi postovi</h1>
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
