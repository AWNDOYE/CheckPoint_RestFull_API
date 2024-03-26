const mongoose = require("mongoose");
require('dotenv').config();
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // userUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à la base de données MongoDB réussie"))
  .catch((err) =>console.error("Erreur de connexion à la base de données MongoDB :", err));