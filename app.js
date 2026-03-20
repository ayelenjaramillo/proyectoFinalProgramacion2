//importamos express

const express = require('express'); 

//guardamos express
const app = express();

const PORT = 3000; 

let contador = 0;

app.get("/", (req, res)=>{
    res.send("<h1>hola </h1>")
})

app.get("/about", (req, res)=>{
    res.send("<h1>Soy Aye Jaramillo </h1>")
})

app.get("/contact", (req, res)=>{
    res.send("<p>ayelenjaramillotwgmail.com </p>")
})

app.get("/date", (req, res)=>{
    const date = new Date().toLocaleDateString('es-AR')
    console.log(date)

    res.send(`<p> la fecha de hoy es: ${date}  </p>`)
})

app.get("/contador", (req, res)=>{
 
     contador =  contador + 1; 

    res.send(`<p> las visitas son: ${contador}</p>`)
})


app.listen(PORT, ()=>{
    console.log('servidor corriendo en http://localhost:3000')
})