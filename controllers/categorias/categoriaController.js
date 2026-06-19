const {Categoria, Proyecto} = require("../../database/models");

const categoriaController = {
    todas: async (req, res)=>{
        try {
         const categoria = await Categoria.findAll();
         res.render("./categorias/categorias", {
            titulo: "Todas las categorias", 
            categoria
         })
        } catch (error) {
            res.redirect("./proyectos")
        }
    }, 
    categoria: async (req, res)=>{
        const id = req.params.id; 
        try {
           const categoria = await Categoria.findByPk(id, {
            include: [
                {model: Proyecto, as:  "proyectos"}
            ]
           } ) 
           res.render("./categorias/categoria", {
            titulo: `${categoria.nombre}`, 
            categoria
           })
        } catch (error) {
            console.log("error:", error);
            res.redirect("./proyectos")
        }
    }
}

module.exports = categoriaController; 