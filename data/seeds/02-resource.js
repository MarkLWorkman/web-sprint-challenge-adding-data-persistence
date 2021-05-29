exports.seed = function (knex) {
  return knex("resources").insert([
    {
      resource_id: 1,
      resource_name: "Wood",
      resource_description: "Test test test test",
    },
    {
      resource_id: 2,
      resource_name: "Brick",
      resource_description: "Banana banana banana",
    },
  ]);
};
