const express = require("express");

const router = express.Router(); 

const categoriaController = require("../controllers/categorias/categoriaController");

router.get("/", categoriaController.todas);
router.get("/categoria/:id", categoriaController.categoria)

module.exports = router; 