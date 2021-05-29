const db = require("../../data/dbConfig");

const findResources = () => {
  return db("resources");
};

const insertResource = async (newResource) => {
  const [resource_id] = await db("resources").insert(newResource);
  return db("resources").where({ resource_id }).first();
};

module.exports = {
  insertResource,
  findResources,
};
