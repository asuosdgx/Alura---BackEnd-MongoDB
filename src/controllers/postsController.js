import { getTodosPosts } from "../models/modelPosts.js";

export async function listaPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}
