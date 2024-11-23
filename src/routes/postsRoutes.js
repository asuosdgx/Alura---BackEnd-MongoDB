import { listaPosts } from "../controllers/postsController.js";
import express from "express";

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listaPosts);
};

export default routes;
