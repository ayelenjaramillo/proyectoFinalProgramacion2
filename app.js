const path = require("path");
//importamos express
require("dotenv").config();
const db = require("./database/models");

const express = require("express");
// const cors = require("cors")
const cookieSession = require("cookie-session");
const setSessionLocals = require("./middlewares/sessionLocals")
//guardamos express
const app = express();

app.use(express.json());

const PORT = 3000;
const proyectoRouter = require("./routes/proyectoRoutes");
const homeController = require("./controllers/homeController");
const homeRouter = require("./routes/homeRoutes");
const escuelaRouter = require("./routes/escuelaRoutes");
const regionRouter = require("./routes/regionRoutes");
const categoriaRouter = require("./routes/categoriaRoute");
const authRouter = require("./routes/authRoute");
const adminRouter = require("./routes/adminRoutes")


const { METHODS } = require("http");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    secret: process.env.SESSION_SECRET,
    maxAge: 24 * 60 * 60 * 1000
  })
);


app.use(setSessionLocals); 

app.use("/", homeRouter);
app.use("/proyectos", proyectoRouter);
app.use("/escuelas", escuelaRouter);
app.use("/regiones", regionRouter);
app.use("/categorias", categoriaRouter);
app.use("/", authRouter);
app.use("/admin", adminRouter)

app.use(homeController.notFound);



db.sequelize
  .authenticate()
  .then(() => {
    console.log("Coneccion en mysql exitosa");
    app.listen(PORT, () => {
      console.log("[clase08]servidor corriendo en http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("error de conexion a Mysql:", error.message);
  });


  module.exports = app;