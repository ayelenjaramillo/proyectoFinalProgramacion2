const {
  Proyecto,
  Categoria,
  Escuela,
  ProyectoImagen,
} = require("../../database/models");

const proyectoController = {
  todos: async (req, res) => {
    try {
      const proyecto = await Proyecto.findAll({
        where: { estado: "aprobado" },
        include: [
          { model: Categoria, as: "categoria" },
          { model: Escuela, as: "escuela" },
          { model: ProyectoImagen, as: "imagenes" },
        ],
      });
      res.render("./proyectos/proyectos", {
        titulo: "Mirá todos los proyectos",
        proyecto,
      });

      //    res.json(proyecto)
    } catch (error) {
      res.redirect("/proyectos");
    }
  },
  detalleProyecto: async (req, res) => {
    const id = req.params.id;
    try {
      const proyecto = await Proyecto.findByPk(id, {
        include: [
          { model: Categoria, as: "categoria" },
          { model: Escuela, as: "escuela" },
          { model: ProyectoImagen, as: "imagenes" },
        ],
      });
      res.render("./proyectos/proyecto", {
        titulo: `Proyecto: ${proyecto.titulo}`,

        proyecto,
      });
    } catch (error) {
      res.redirect("/proyectos");
    }
  },
  formNuevo: async (req, res) => {
    const categorias = await Categoria.findAll();
    const escuelas = await Escuela.findAll();
    res.render("./proyectos/nuevo", {
      titulo: "Subí tu proyecto",
      categorias,
      escuelas,
    });
  },
  crearNuevo: async (req, res) => {
    const { titulo, descripcion, categoria_id, escuela_id } = req.body;
    const usuario_id = req.session.usuario.id;

    try {
      const proyecto = await Proyecto.create({
        titulo,
        descripcion,
        categoria_id,
        escuela_id,
        usuario_id,
        estado: "pendiente",
      });

      if (req.files && req.files.length > 0) {
        const imagenes = req.files.map((f) => ({
          filename: f.filename,
          proyecto_id: proyecto.id,
        }));
        await ProyectoImagen.bulkCreate(imagenes);
      }

      res.redirect("/proyectos");
    } catch (error) {
      res.redirect("/proyectos/nuevo");
    }
  },

  editar: async (req, res) => {
    const id = req.params.id;
    try {
      const proyecto = await Proyecto.findByPk(id, {
        include: [{ model: ProyectoImagen, as: "imagenes" }],
      });

      const categorias = await Categoria.findAll();
      const escuelas = await Escuela.findAll();

      if (!proyecto) {
        return res.redirect("/proyectos");
      }
      res.render("./proyectos/editar", {
        titulo: "Editando",
        proyecto,
        categorias,
        escuelas,
      });
    } catch (error) {
      res.redirect("/proyectos");
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    try {
      const proyecto = await Proyecto.findByPk(id);
      if (!proyecto) {
        return res.redirect("/proyectos");
      }
      const { titulo, descripcion, escuela_id, categoria_id } = req.body;

      const nuevo = {
        titulo,
        descripcion,
        escuela_id,
        categoria_id,
      };
      await Proyecto.update(nuevo, {
        where: {
          id: id,
        },
      });

      if (req.files && req.files.length > 0) {
        const imagenes = req.files.map((imagen) => ({
          filename: imagen.filename,
          proyecto_id: proyecto.id,
        }));
        await ProyectoImagen.bulkCreate(imagenes);
      }

      res.redirect(`/proyectos/${proyecto.id}`);
    } catch (error) {
      res.redirect("/proyectos");
    }
  },
  eliminarProyecto: async (req, res) => {
    const id = req.params.id;
    try {
      const proyecto = await Proyecto.findByPk(id);
      if (!proyecto) {
        return res.redirect("/proyectos");
      }
      await proyecto.destroy();
      res.redirect("/proyectos");
    } catch (error) {
      res.redirect("/proyectos");
    }
  },
  eliminarImagen: async (req, res) => {
    const { proyectoId, imagenId } = req.params;
    const path = require("path");
    const fs = require("fs");

    try {
      const imagen = await ProyectoImagen.findByPk(imagenId);
      if (!imagen) {
        return res.redirect(`/proyectos/${proyectoId}/editar`);
      }

      const filePath = path.join(
        __dirname,
        "../../public/img/proyectos",
        imagen.filename
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      await imagen.destroy();
      res.redirect(`/proyectos/${proyectoId}/editar`);
    } catch (error) {
      console.error(error);
      res.redirect(`/proyectos/${proyectoId}/editar`);
    }
  },
  misProyectos: async (req, res) => {
    const usuario_id = req.session.usuario.id;
    try {
      const proyectos = await Proyecto.findAll({
        where: { usuario_id },
        include: [
          { model: Escuela, as: "escuela" },
          { model: ProyectoImagen, as: "imagenes" },
          { model: Categoria, as: "categoria" },
        ],
        order: [["createdAt", "ASC"]],
      });
      res.render("./proyectos/misProyectos", {
        proyectos,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/proyectos");
    }
  },
};

module.exports = proyectoController;
