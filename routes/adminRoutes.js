const express = require("express"); 

const router = express.Router(); 

const adminController = require("../controllers/admin/adminController"); 
const auth = require("../middlewares/auth")

router.get("/", auth.isAdmin, adminController.panel)
router.post("/:id/aprobar",auth.isAdmin, adminController.aprobar)
router.post("/:id/rechazar", auth.isAdmin, adminController.rechazar)
router.get("/todos", auth.isAdmin, adminController.todos)

module.exports = router; 