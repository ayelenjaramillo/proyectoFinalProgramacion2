const {Categoria} = require("../database/models")

const homeController = {
    index: async (req, res)=>{

        const categorias = await Categoria.findAll(); 

        res.render("index", { 
            titulo: "Repositorio de Proyectos", 
            categorias
        })
    },
    notFound: (req, res)=>{
        res.status(404).render("404", {
            h1: "pagina no encntrada"
        })
    }
}

module.exports = homeController;