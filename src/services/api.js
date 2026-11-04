import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchTasks({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}

export async function getTaskId({ id, token }) {
  try {
    const data = await axios.get(API_URL + "/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}

export async function postTask({ task, token }) {
  try {
    const data = await axios.post(API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}

export async function putTask({ id, task, token }) {
  try {
    const data = await axios.put(`${API_URL}/${id}`, task, {
      headers: {
        Authorization: "Bearer " + token,
         "Content-Type": "",
      },
    });

    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}

export async function deleteTask({ id, token }) {
  try {
    const data = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message, {
      cause: error,
    });
  }
}