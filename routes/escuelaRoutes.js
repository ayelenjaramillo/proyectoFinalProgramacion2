const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerUpload")

const escuelaController = require("../controllers/escuelas/escuelaController");

router.get("/", escuelaController.todas);
router.get("/nuevo", escuelaController.formNuevo);
router.get("/:id/editar", escuelaController.formEditar);
router.get("/:id", escuelaController.detalleEscuela);

router.post("/", upload.single("logo"),escuelaController.crearEscuela);
router.post("/:id/editar", upload.single("logo"),escuelaController.editar);
router.post("/:id/eliminar", escuelaController.eliminar)

module.exports = router;
