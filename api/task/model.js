const db = require("../../data/dbConfig");

const intToBoolean = (int) => {
  return int === 1 ? true : false;
};

function taskToBody(task) {
  return {
    ...task,
    task_completed: intToBoolean(task.task_completed),
  };
}

const findTasks = () => {
  return db("tasks as t")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .join("projects as p", "p.project_id", "t.project_id")
    .orderBy("p.project_name")
    .then((tasks) => {
      return tasks.map((task) => taskToBody(task));
    });
};

const insertTasks = async (newTask) => {
  return db("tasks as t")
    .insert(newTask, "task_id")
    .then(([task_id]) => findById(task_id));
};

const findById = async (task_id) => {
  return db("tasks as t")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_id"
    )
    .join("projects as p", "p.project_id", "t.project_id")
    .orderBy("p.project_id")
    .where({ task_id })
    .then((tasks) => {
      return tasks.map((task) => taskToBody(task));
    });
};

module.exports = {
  findTasks,
  insertTasks,
};
