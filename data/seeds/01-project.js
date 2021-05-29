exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_id: 1,
      project_name: "Build a House",
      project_description: null,
      project_completed: false,
    },
    {
      project_id: 2,
      project_name: "Build a Pool",
      project_description: null,
      project_completed: false,
    },
  ]);
};
