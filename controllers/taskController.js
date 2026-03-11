const Task = require("../models/Task");
const Project = require("../models/Project");

// Create Task (Only project member can create)
exports.createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo, dueDate } = req.body;

    const project = await Project.findById(projectId);

    if (!project)
      return res.status(404).json({ message: "Project not found" });

    // Check if user is project member
    if (!project.members.some(member => member.toString() === req.user._id.toString()))
      return res.status(403).json({ message: "Not authorized in this project" });

    const task = await Task.create({
      title,
      description,
      project: projectId,
      assignedTo,
      dueDate
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Task creation failed" });
  }
};

// Get Tasks of a Project
exports.getProjectTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId })
      .populate("assignedTo", "name email");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

// Update Task Status (Only assigned user)
exports.updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    if (task.assignedTo.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "You can update only your task" });

    task.status = req.body.status || task.status;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Task update failed" });
  }
};