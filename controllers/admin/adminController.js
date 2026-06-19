const {
  Proyecto,
  Categoria,
  Escuela,
  Usuario,
  ProyectoImagen,
} = require("../../database/models");

const adminController = {
  panel: async (req, res) => {
    try {
      const proyectosPendientes = await Proyecto.findAll({
        where: { estado: "pendiente" },
        include: [
          { model: Categoria, as: "categoria" },
          { model: Escuela, as: "escuela" },
          { model: Usuario, as: "autor" },
          { model: ProyectoImagen, as: "imagenes" },
        ],
        order: [["createdAt", "ASC"]],
      });
      res.render("./admin/panel", {
        proyectosPendientes,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
  },
  todos: async (req, res) => {
    try {
      const proyectos = await Proyecto.findAll({
        include: [
          { model: Categoria, as: "categoria" },
          { model: Escuela, as: "escuela" },
          { model: Usuario, as: "autor" },
          { model: ProyectoImagen, as: "imagenes" },
        ],
        order: [["createdAt", "ASC"]],
      });

      console.log("proyecto: ", JSON.stringify(proyectos, null, 4));
      res.render("./admin/todos", {
        proyectos,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/admin");
    }
  },
  aprobar: async (req, res) => {
    const id = req.params.id;
    try {
      await Proyecto.update({ estado: "aprobado" }, { where: { id } });
      res.redirect("/admin");
    } catch (error) {
      console.error(error);
      res.redirect("/admin");
    }
  },
  rechazar: async (req, res) => {
    const id = req.params.id;
    try {
      await Proyecto.update({ estado: "rechazado" }, { where: { id } });
      res.redirect("/admin");
    } catch (error) {
      console.error(error);
      res.redirect("/admin");
    }
  },
};

module.exports = adminController;
