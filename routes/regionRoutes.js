const express = require("express");
const router = express.Router();

const regionController = require("../controllers/regiones/regionController");

router.get("/", regionController.all);
router.get("/:id", regionController.show);




module.exports = router;