const mongoose = require('mongoose');

// Définition du schéma user
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true, // Le nom est obligatoire
        // min : 3,
        // max : 20 //Ma caratères
    },
    email: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required : true,
    }
}, {timestamps:true});
console.log("model  ok");
// Création du modèle User à partir du schéma
const User = mongoose.model('User', UserSchema);

// Exporter le modèle User
module.exports = User;