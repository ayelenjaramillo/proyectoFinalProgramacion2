const {Region, Escuela} = require("../../database/models"); 



const regionController = {
    all: async (req,res ) =>{
        try {
         const regiones = await Region.findAll(); 
         console.log("regiones: ", JSON.stringify(regiones));
        } catch (error) {
            res.redirect("/")
        }
    }, 
    show: async (req, res) =>{
        const id = req.params.id; 
        try {
            const region = await Region.findByPk(id, {
                include: [{model: Escuela, as: 'escuelas' }]
                
            })
            console.log('region: ', JSON.stringify(region, null, 4 ) );
        } catch (error) {
    
}
    }
}

module.exports = regionController; 