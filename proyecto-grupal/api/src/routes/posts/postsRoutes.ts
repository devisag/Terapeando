import { Router } from "express";
const {
  createPost,
  getAllPosts,
  getAllCategory,
  filterPostsCategory,
  getOnePost,
  deletePost,
  putPost
} = require("./posts.ts");

const validatePsychologistOrAdmin = require('../../middleware/validatePsychologistOrAdmin')
const ClientOrAdmin = require('../../middleware/validateClientOrAdmin')

const postsRouter: Router = Router();

postsRouter.get("/posts", getAllPosts);
postsRouter.get("/post/:id",getOnePost);
postsRouter.post("/post", validatePsychologistOrAdmin, createPost);
postsRouter.get("/categories", getAllCategory);
postsRouter.get("/filter/:category", filterPostsCategory);
postsRouter.delete("/deletePost/:IdPost", validatePsychologistOrAdmin ,deletePost)
postsRouter.put("/:IdPost",putPost)
module.exports = postsRouter;
