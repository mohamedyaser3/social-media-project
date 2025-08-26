import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfilePageApi } from "../service/getProfilePosts";
import Posts from "../Components/Posts";
import Lodingscreen from "./Lodingscreen";
import backgroundimg from "../assets/133046.jpg";
import CreatePost from "../Components/Post/CreatPost";

export default function ProfilePage() {
  const [postProfile, setPostProfile] = useState(null);

  const { id } = useParams();

  async function getProfilePage() {
    const response = await getProfilePageApi(id);
    console.log(response);
    if (response.message == "success") {
      setPostProfile(response.posts);
    }
  }

  useEffect(() => {
    getProfilePage();
  }, [id]);

  return (
    <>
      <div
        className="relative min-h-screen overflow-auto"
        style={{ backgroundImage: `url(${backgroundimg})` }}
      >
        <div className="max-w-3xl mx-auto my-2">
         {postProfile === null ? (
            <Lodingscreen />
          ) : postProfile.length === 0 ? (
            <p className="text-center text-xl font-semibold mt-10">
              There are no posts yet.
              <CreatePost getAllPosts={getProfilePage}/>
            </p>
          ) : (
            postProfile.map((post) => (
              <Posts
                key={post._id}
                post={post}
                callbace={getProfilePage}
                getAllPosts={getProfilePage}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
