import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSinglePostApi } from "../service/PostsService";
import Posts from "../Components/Posts";
import Lodingscreen from "./Lodingscreen";

export default function PostDetailsPage() {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  async function getSinglePost() {
    const response = await getSinglePostApi(id);        
    if (response.message == "success") {
      
      setPost(response.post);
    }
  }
  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto">{post ? <Posts post={post} callbace={getSinglePost} getAllPosts={getSinglePost} /> : <Lodingscreen />}</div>
    </>
  );
}
