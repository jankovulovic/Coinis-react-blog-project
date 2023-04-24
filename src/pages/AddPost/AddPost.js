import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "../AddPost/AddPost.module.css";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(AppContext);

  const schema = yup.object().shape({
    title: yup.string().required("Post Title is Required!").max(20),
    imageUrl: yup.string().required("Your image URL is Required").url(),
    author: yup.string().required("Please put the name of the Author.").max(20),
    text: yup.string().max(250, "Text must be a maximum of 250 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    fetch("https://jsonblob.com/api/jsonBlob", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        redirect: "follow",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.status === 201) {
          // alert("Blog Uspjesno Dodat!!!");
          const newPostsContext = [...posts, data];
          console.log(newPostsContext.length);
          newPostsContext[newPostsContext.length - 1].id =
            newPostsContext.length;
          console.log(newPostsContext);
          setPosts(newPostsContext);
          navigate("/");
        } else {
          alert("Post nije dodat.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <h1 className={classes.title}>Make New Post</h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Title..." {...register("title")} />
        <p>{errors.title?.message}</p>
        <input
          type="text"
          placeholder="Image link..."
          {...register("imageUrl")}
        />
        <p>{errors.imageUrl?.message}</p>
        <input type="text" placeholder="Author..." {...register("author")} />
        <p>{errors.author?.message}</p>
        <textarea placeholder="Text" {...register("text")} />
        <p>{errors.text?.message}</p>
        <button type="submit">Dodaj post</button>
      </form>
    </>
  );
};

export default AddPost;
