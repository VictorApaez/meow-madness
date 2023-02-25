import api from "./apiConfig";

export const signup = async ({ username, password }) => {
  try {
    const res = await api.post("/auth/signup", {
      username,
      password,
    });

    if (res.data.token) {
      return { token: res.data.token, success: true };
    } else {
      return { success: false };
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = async ({ username, password }) => {
  try {
    const res = await api.post("/auth/login", {
      username,
      password,
    });

    if (res.data.token) {
      return { token: res.data.token, success: true };
    } else {
      return { success: false };
    }
  } catch (err) {
    console.log(err);
  }
};