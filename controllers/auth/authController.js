const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const { Usuario } = require("../../database/models");

const authController = {
  formRegistro: (req, res) => {
    res.render("./auth/registro", {
      titulo: "Crear cuenta: ",
      errors: [],
      datos: {},
    });
  },
  registrar: async (req, res) => {
    const errores = validationResult(req);
   

    if (!errores.isEmpty()) {
      return res.render("./auth/registro", {
        titulo: "Crear cuenta: ",
        errors: errores.array(),
        datos: req.body,
      });
    }

    const { nombre, email, password } = req.body;

    try {
      const passwordHasheada = bcrypt.hashSync(password, 10);
      await Usuario.create({
        nombre,
        email,
        password: passwordHasheada,
        rol: "profesor",
      });
      res.redirect("/login");
    } catch (error) {
      console.error(error);
      res.redirect("/registro");
    }
  },
  formLogin: (req, res) => {
    res.render("./auth/login", {
      titulo: "Iniciar Sesion: ",
      errors:[], 
      datos: {}
    });
  },

 
  login: async (req, res) => {
    const erroresLogin = validationResult(req)

    if (!erroresLogin.isEmpty()){
      return res.render("./auth/login", {
        titulo:"Iniciar Sesion: ", 
        errors: erroresLogin.array(), 
        datos: req.body
      })
    }


    const { email, password } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) {
        return res.redirect("/login");
      }

      const paswordCorrecta = bcrypt.compareSync(password, usuario.password);

      if (!paswordCorrecta) {
        return res.redirect("/login");
      }

      req.session.usuario = {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        rol: usuario.rol,
      };

      console.log("LOGIN OK");
      console.log(req.session.usuario);
      if (usuario.rol === "admin") {
        return res.redirect("/admin");
      }

      res.redirect("/proyectos");
    } catch (error) {
      console.error(error);
      res.redirect("/login");
    }
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.redirect("/");
    });
  },
};

module.exports = authController;
