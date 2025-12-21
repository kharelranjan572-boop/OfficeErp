import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // placeholder API
  headers: { "Content-Type": "application/json" },
});

export default client;
