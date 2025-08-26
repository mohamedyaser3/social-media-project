import axios from "axios";

const basUrl = "https://linked-posts.routemisr.com/";
export async function registrApi(formdate) {
  try {
    const { data } = await axios.post(basUrl + "users/signup", formdate);
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
export async function loginApi(formdate) {
  try {
    const { data } = await axios.post(basUrl + "users/signin", formdate);
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
export async function getUserDataApi() {
  try {
    const { data } = await axios.get(basUrl + "users/profile-data", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}



export async function changePasswordApi({ password, newPassword }) {
  try {
    const { data } = await axios.patch(
      basUrl + "users/change-password",
      { password, newPassword },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return data;
  } catch (error) {
    return error.response ? error.response.data : error.message;
  }
}
