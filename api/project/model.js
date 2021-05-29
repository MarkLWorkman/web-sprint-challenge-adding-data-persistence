const db = require("../../data/dbConfig");

const intToBoolean = (int) => {
  return int === 1 ? true : false;
};

function projectToBody(project) {
  return {
    ...project,
    project_completed: intToBoolean(project.project_completed),
  };
}

const findProjects = () => {
  return db("projects").then((projects) => {
    return projects.map((project) => projectToBody(project));
  });
};

const findById = (project_id) => {
  return db("projects")
    .where({ project_id })
    .then((projects) => {
      return projects.map((project) => projectToBody(project));
    });
};

const insertProject = async (newProject) => {
  return db("projects as p")
    .insert(newProject, "project_id")
    .then(([project_id]) => findById(project_id));
};

module.exports = {
  findProjects,
  insertProject,
};
