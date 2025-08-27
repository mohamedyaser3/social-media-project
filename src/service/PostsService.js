import axios from "axios";

const basUrl = "https://linked-posts.routemisr.com/";

export async function getAllPostsApi() {
  try {
    const { data } = await axios.get(basUrl + "posts", {
      headers: {
        token: localStorage.getItem("token"),
      },
      params:{
        page: 20

      }
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
export async function getSinglePostApi(postId) {
  try {
    const { data } = await axios.get(basUrl + "posts/" + postId, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}

export async function addPost(formData) {
  try {
    const { data } = await axios.post(basUrl + "posts", formData, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}

export async function deletSinglePostApi(postId) {
  try {
    const { data } = await axios.delete(basUrl + "posts/" + postId, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}

// export async function updatePostApi(formData , postId) {
//   try {
//     const { data } = await axios.put(basUrl + postId , formData, {
//       headers: {
//         token: localStorage.getItem("token"),
//       },
//     });
//     return data;
//   } catch (error) {
//     return error.response ? error.response.data.error : error.message;
//   }
// }


export async function updatePostApi(formData, postId) {
  try {
    const { data } = await axios.put(
      basUrl + "posts/" + postId,   
      formData,
      {
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data", 
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Update Error:", error.response || error.message);
    return error.response ? error.response.data.error : error.message;
  }
}
