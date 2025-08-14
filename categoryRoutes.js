import express from "express";
import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} from "../controllers/categoryController.js";
import { auth, allowAdminManager } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", auth, allowAdminManager, createCategory);
router.put("/:id", auth, allowAdminManager, updateCategory);
router.delete("/:id", auth, allowAdminManager, deleteCategory);

export default router;