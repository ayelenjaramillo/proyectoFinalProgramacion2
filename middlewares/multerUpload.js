const multer = require("multer");
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const cloudinary = require("../config/cloudinary")


const getFolder = (req) => {
  if (req.baseUrl.includes("escuelas")) {
    return "feria/escuelas";
  }

  if (req.baseUrl.includes("proyectos")) {
    return "feria/proyectos";
  }

  return "feria/otros";
};

const storage = new CloudinaryStorage({
  cloudinary, 
  params: (req,file) => ({
    folder: getFolder(req),
    allowed_formats: ["jpg", "png", "jpeg", "gif", "webp"], 
    public_id: `${file.fieldname}-${Date.now()}`
  })
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
