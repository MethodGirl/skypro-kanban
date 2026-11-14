import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function getUsersList() {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        "Content-Type": "",
      },
    });
       
    return data.data.users;

  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}

export async function signIn(userData) {
  try {
    const data = await axios.post(API_URL + "/login", userData, {
      headers: {
        "Content-Type": "",
      },
    });
    console.log(data.data.user)
    return data.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      },
    );
    return data.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}
