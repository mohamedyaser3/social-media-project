import { useEffect, useState } from "react";
import { getAllPostsApi } from "../service/PostsService";
import IsLoding from "../isloding/IsLoding";
import Posts from "../Components/Posts";
import CreatPost from "../Components/Post/CreatPost";
import backgroundimg from "../assets/133046.jpg";
export default function FeedPage() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isloding, setIsLoding] = useState(true);
  async function getAllPosts() {
    const data = await getAllPostsApi();
    console.log(data);
    if (data.message === "success") {
      setPosts(data.posts.reverse());
    }
    setIsLoding(false);
  }
  function handleIncrement() {
    setCount(count + 1);
  }
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
   <>
      <div
        className="relative min-h-screen"
        style={{ backgroundImage: `url(${backgroundimg})` }}
      >
        <div className="absolute inset-0 bg-black/0.5"></div>

        <div className="relative z-10">
          <CreatPost getAllPosts={getAllPosts} />
          {isloding ? (
            <IsLoding />
          ) : (
            <div className="grid gap-4 p-4 max-w-2xl mx-auto shadow-2xl">
              {posts.map((post) => (
                <Posts
                  getAllPosts={getAllPosts}
                  callbace={getAllPosts}
                  key={post.id}
                  post={post}
                  count={count}
                  handleIncrement={handleIncrement}
                  commentLimit={1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
