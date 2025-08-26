import axios from "axios";

const basUrl = "https://linked-posts.routemisr.com/";

export async function getProfilePageApi(postId) {
  try {
    const { data } = await axios.get(basUrl + "users/" + postId + "/posts", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}