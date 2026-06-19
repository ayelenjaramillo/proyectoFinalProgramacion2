const express = require("express");
const router = express.Router();

const proyectoController = require("../controllers/proyecto/proyectoController");
const upload = require("../middlewares/multerUpload"); 
const auth = require("../middlewares/auth")// rutas publicas
router.get("/", proyectoController.todos);

// rutas protegidas
router.get("/nuevo", auth.isLoggedIn, proyectoController.formNuevo);
router.post("/nuevo", auth.isLoggedIn, upload.array("imagenes", 5), proyectoController.crearNuevo);

router.get("/misproyectos", auth.isLoggedIn, proyectoController.misProyectos);

router.get("/:id/editar", auth.isLoggedIn, proyectoController.editar);
router.post("/:id/editar", auth.isLoggedIn, upload.array("imagenes", 5), proyectoController.update);

router.post("/:id/eliminar", auth.isLoggedIn, proyectoController.eliminarProyecto);
router.post("/:proyectoId/imagenes/:imagenId/eliminar", auth.isLoggedIn, proyectoController.eliminarImagen);

// SIEMPRE AL FINAL
router.get("/:id", proyectoController.detalleProyecto);

module.exports = router;