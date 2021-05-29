exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_id: 1,
      task_description: "this is a test",
      task_notes: "yes i love tests",
      task_completed: true,
      project_id: 1,
    },
  ]);
};
