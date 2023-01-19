import axios from "axios";

export const createFolder = async (folder) => {
  try {
    const url = "http://localhost:8080/folders";

    const res = await axios.post(url, folder);
    console.log(res);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};
