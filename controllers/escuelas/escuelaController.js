const { Escuela, Region, Proyecto } = require("../../database/models");
//const db = require("../../database/models")

const escuelaController = {
  todas: async (req, res) => {
    try {
      const escuela = await Escuela.findAll({
        include: [{ model: Region, as: "region" }],
      });

      res.render("./escuelas/escuelas", {
        titulo: "Mirá todas las escuelas que participan del programa",
        escuela,
      });
    } catch (error) {
      res.redirect("/escuelas");
    }
  },
  detalleEscuela: async (req, res) => {
    const id = req.params.id;
    try {
      const escuela = await Escuela.findByPk(id, {
        include: [
          { model: Region, as: "region" },
          { model: Proyecto, as: "proyectos" },
        ],
      });

      console.log("escuelas: ", JSON.stringify(escuela, null, 4));
      res.render("./escuelas/escuela", {
        titulo: `Escuela: ${escuela.nombre}`,
        escuela,
      });
    } catch (error) {
      res.redirect("/escuelas");
    }
  },
  formNuevo: async (req, res) => {
    const regiones = await Region.findAll();

    res.render("./escuelas/nuevo", {
      titulo: "Ingresá tu escuela",
      regiones,
    });
  },
  crearEscuela: async (req, res) => {
    const { nombre, padron, region_id, localidad } = req.body;
    const logo =    req.file ? req.file.path : null; 

    try {
      await Escuela.create({
        nombre,
        padron,
        localidad,
        region_id,
        logo
      });
      res.redirect("/escuelas");
    } catch (error) {

      res.redirect("/escuelas/nuevo");
    }
  },
  formEditar: async (req, res) => {
    const id = req.params.id;
    try {
      const escuela = await Escuela.findByPk(id);
    
      const regiones = await Region.findAll();
 
      if (!escuela) {
        return res.redirect("/escuelas");
      }
      res.render("./escuelas/editar", {
        titulo: "Comienza a editar la información de tu escuela",
        escuela,
        regiones,
      });
    } catch (error) {
      res.redirect("/escuelas");
    }
  },
  editar: async (req, res) => {
    console.log(req.file);

    const id = req.params.id;
    const escuela = await Escuela.findByPk(id);
    try {
      const { nombre, padron, region_id, localidad } = req.body;
      const logo = req.file ? req.file.path : escuela.logo;

      const nuevosDatos = {
        nombre,
        padron,
        region_id,
        localidad,
        logo
      };
      await Escuela.update(nuevosDatos, {
        where: {
          id: id,
        },
      });

      res.redirect(`/escuelas/${id}`);
    } catch (error) {
      res.redirect("/escuelas");
    }
  },
  eliminar: async (req, res) => {
    const id = req.params.id;
    try {
      const escuela = await Escuela.findByPk(id);
      if (!escuela) {
        return res.redirect("/escuelas");
      }
      await escuela.destroy();
      res.redirect("/escuelas");
    } catch (error) {
      res.redirect("/escuelas");
    }
  },
};

module.exports = escuelaController;
