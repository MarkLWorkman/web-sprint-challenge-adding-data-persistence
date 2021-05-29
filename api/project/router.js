const router = require("express").Router();

const Projects = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.findProjects();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (typeof req.body.project_completed !== "boolean") {
      res.status(400).json({ message: "project_completed must be a boolean" });
    } else {
      const newProject = await Projects.insertProject(req.body);
      res.status(201).json(newProject);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
