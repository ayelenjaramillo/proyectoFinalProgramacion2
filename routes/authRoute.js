const express = require("express"); 
const validaciones = require("../middlewares/validaciones")
const router = express.Router(); 

const authController = require("../controllers/auth/authController"); 
const auth = require("../middlewares/auth")

router.get("/registro", auth.isGuest, authController.formRegistro); 
router.post("/registro", auth.isGuest, validaciones.registro, authController.registrar); 

router.get("/login", auth.isGuest , authController.formLogin); 
router.post("/login", auth.isGuest, validaciones.login,  authController.login); 
router.post("/logout", authController.logout); 


module.exports = router; 