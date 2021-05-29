const router = require("express").Router();

const Resources = require("./model");

router.get("/", async (req, res) => {
  try {
    const resources = await Resources.findResources();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newResource = await Resources.insertResource(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
