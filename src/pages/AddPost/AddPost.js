import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AppContext } from "../../App";

import classes from "../AddPost/AddPost.module.css";

export const AddPost = () => {
  const { posts, setPosts } = useContext(AppContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("Post Title is Required!").max(20),
    imageUrl: yup.string().required("Your image URL is Required!").url(),
    author: yup.string().required("Author name is Required!").max(20),
    text: yup
      .string()
      .max(250, "Text must be a maximum of 250 characters")
      .required("Please put content of your blog here."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(formData) {
    fetch("https://jsonblob.com/api/jsonBlob", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        redirect: "follow",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        if (response.status === 201) {
          const newPostsContext = [...posts, formData];
          newPostsContext[newPostsContext.length - 1].id =
            newPostsContext.length;
          setPosts(newPostsContext);
          navigate("/");
        } else {
          alert("Post unsuccesful,Try again.");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Post unsuccesful,Try again.");
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
        <textarea placeholder="Content..." {...register("text")} />
        <p>{errors.text?.message}</p>
        <button type="submit">Add Post</button>
      </form>
    </>
  );
};
