const userControlled = require("../Controllers/userController")
const express = require("express");
const router = express.Router();
console.log("route  ok");
//******************Création Données************************
router.post('/UserCreated', userControlled.createAllUser);
router.post('/OneUserCreated', userControlled.createOneUser);



//************************Récupération Données************************
router.get('/AllUsers', userControlled.allUsers)



//************************Mise à jour Données************************
router.put('/UserChanged/:id', userControlled.userUpdateByID)



//************************Suppression Données************************
router.delete('/userDeleted/:id', userControlled.deleteOneUser)


module.exports=router;