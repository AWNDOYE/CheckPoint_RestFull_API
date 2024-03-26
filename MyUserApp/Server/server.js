const express = require("express");
// const cors = require("cors") 
const bodyparser = require("body-parser");
const app = express();
const port = 5000;
const userRouter = require("./Router/userRouter.js");
require("dotenv").config({ path: "./Config/.env" }); // Pour charger les variables d'environnement depuis .env
require("./Config/db.js");
 
// Middleware pour parser les requêtes JSON
app.use(bodyparser.json());
// app.use((cors))

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
//Route par défaut
app.use("/api", userRouter);


