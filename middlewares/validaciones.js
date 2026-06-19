
const {body} = require("express-validator")
const {Usuario} = require("../database/models")

const validaciones = {
    registro: [
        body("nombre")
            .trim()
            .notEmpty()
            .withMessage("El campo Nombre es obligatorio"),
        body("email")
            .trim()
            .notEmpty()
            .withMessage("El campo Email es obligatorio")
            .isEmail()
            .withMessage("El email debe tener formato válido")
            .normalizeEmail()
            .custom(async (email)=>{
               const existeUsuario =  await Usuario.findOne({
                where: {email}
               })
               if(existeUsuario){
                throw new Error("Email ya registrado")
               } 
               return true
            })
            , 
        body("password")
            .notEmpty()
            .withMessage("Contraseña obligatoria")
            .isLength({min:6})
            .withMessage("la contraseña debe tener al menos 6 caracteres")
    ], 
    login: [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("El campo Email es obligatorio")
            .isEmail()
            .withMessage("El email debe tener formato válido"), 
        body("password")
            .notEmpty()
            .withMessage("Contraseña obligatoria")
    ]
}

module.exports = validaciones