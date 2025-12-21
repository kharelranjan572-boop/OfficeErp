import client from "./client";

export const fetchUsers = async () => {
  const res = await client.get("/users");
  return res.data;
};