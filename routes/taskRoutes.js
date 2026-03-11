const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createTask,
  getProjectTasks,
  updateTaskStatus
} = require("../controllers/taskController");

router.post("/", protect, createTask);
router.get("/:projectId", protect, getProjectTasks);
router.put("/:id/status", protect, updateTaskStatus);

module.exports = router;