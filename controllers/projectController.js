const Project = require('../models/Project');

exports.createProject = async (req, res) =>{
    try {
        const project = await Project.create({
            title: req.body.title,
            description: req.body.description,
            owner: req.user._id,
            members: [req.user._id],
        });
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: "Project creation failed" });
    }

}

exports.getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user._id
    }).populate("owner", "name email");

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};