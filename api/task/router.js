const router = require("express").Router();

const Tasks = require("./model");

router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.findTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (typeof req.body.task_completed !== "boolean") {
      res.status(400).json({ message: "task_completed must be a boolean" });
    } else {
      const newTasks = await Tasks.insertTasks(req.body);
      res.status(201).json(newTasks);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
