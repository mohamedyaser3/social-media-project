import axios from "axios";

const basUrl = "https://linked-posts.routemisr.com/";

export async function addComment( CommentContent, PostId ) {
  try {
    const { data } = await axios.post(
      basUrl + "comments",
      {
        content: CommentContent,
        post: PostId,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}

export async function deletSingleCommentApi(commentId) {
  try {
    const { data } = await axios.delete(basUrl + "comments/" + commentId, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}

export async function updateCommentApi(commentId, newCommentContent) {
  try {
    const { data } = await axios.put(basUrl + "comments/" + commentId,{
      content: newCommentContent
    }, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}