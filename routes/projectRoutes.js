const express = require("express");
const router = express.Router();
const { createProject, getMyProjects } = require("../controllers/projectController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.get("/all", protect, authorizeRoles("admin"), async (req, res) => {
  const projects = await require("../models/Project").find()
    .populate("owner", "name email");
  res.json(projects);
});
router.post("/", protect, createProject);
router.get("/", protect, getMyProjects);

module.exports = router;