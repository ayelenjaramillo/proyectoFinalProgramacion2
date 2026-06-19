const multer = require("multer");

const path = require("path");

const getPrefix = (req) => {
  if (req.baseUrl.includes("escuelas")) return "escuela";
  if (req.baseUrl.includes("proyectos")) return "proyecto";

  return "archivo";
};

const getFolder = (req) => {
  if (req.baseUrl.includes("escuelas")) {
    return "../public/img/escuelas";
  }

  if (req.baseUrl.includes("proyectos")) {
    return "../public/img/proyectos";
  }

  return "../public/img";
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, getFolder(req)));
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const extension = path.extname(file.originalname);

    const nombreFinal = `${getPrefix(req)}-${timestamp}${extension}`;
    cb(null, nombreFinal);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten imagenes"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
