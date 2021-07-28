import express from "express";

import {
  createPosts,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/blog";

const router = express.Router();

router.post("/", createPosts);
router.get("/", getPosts);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
