import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const res = await axios.get(API);

  return res.data;
};

export const createPost = async (post) => {
  const res = await axios.post(API, post);

  return res.data;
};

export const updatePost = async ({ id, post }) => {
  const res = await axios.put(
    `${API}/${id}`,
    post
  );

  return res.data;
};

export const deletePost = async (id) => {
  const res = await axios.delete(
    `${API}/${id}`
  );

  return res.data;
};