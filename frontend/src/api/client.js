import axios from "axios";

export const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // placeholder API
  headers: { "Content-Type": "application/json" },
});

export const postData = async (data) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data
  );
  return response.data;
};

