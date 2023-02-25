import api from "./apiConfig";

export const uploadCatImg = async (formData) => {
  try {
    const res = await api.post("/upload", formData);
    return res;
  } catch (err) {
    console.log(err);
  }
};
