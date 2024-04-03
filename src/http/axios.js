import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postMethod = async (url, data) => {
  try {
    return await instance.post(url, data);
  } catch (error) {
    console.error(error);
    return error;
  }
};
