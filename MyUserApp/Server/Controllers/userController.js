const UserModel = require("../Models/userModel");
//****************************CREATION USER DANS LA BDD***********************************/
// POST : AJOUTE UN NOUVEL UTILISATEUR À LA BASE DE DONNÉES
const createOneUser = (req, res) => {
  const userAdd = req.body;
  const newUser = new UserModel(userAdd);
  newUser
    .save()
    .then((userSaved) => {
      console.log("Nouvelle personne enregistrée avec succès :", userSaved);
      res.status(200).json({message: "Utilisateur crée avec succès", userSaved});
    })
    .catch((err) => {
      return res.status(500).json({message : "Erreur lors de l'enregistrement de la personne :", err})
    });
};

const createAllUser = (req, res) => {
  async function createUser() {
    try {
      const userCreated = await UserModel.create([
        {
          userName: "awndoye",
          email: "awa36@gmail.com",
          password: "gomycode2002",
        },
        {
          userName: "awfall",
          email: "awa65@gmail.com",
          password: "gomycode2003",
        },
        {
          userName: "astoudieng",
          email: "astou2005@gmail.com",
          password: "gomycode2007",
        },
        {
          userName: "mamiDieng",
          email: "dieng520@gmail.com",
          password: "gomycode2010",
        },
      ]);
      res.status(200).json({message : "Liste utilisateurs crée avec succès", userCreated});
    } catch (error) {
      return res
        .status(500)

        .json({message: "Erreur lors de la création des utilisateurs", error});
    }
  }
  createUser();
};
// Connexion à la base de données MongoDB réussie
// Nouvelle personne enregistrée avec succès : {
//   userName: 'bintou_Bintou',
//   email: 'bin2014@gmail14',
//   password: 'gomycode2015',
//   _id: new ObjectId('660158f2451b39afd0e5c596'),
//   __v: 0
// }
//*************************************************************************************************/

//***************************GET : RENVOIE TOUS LES UTILISATEURS***********************************/
const allUsers = (req, res) => {
  async function sendAllUsers() {
    try {
      const allUserSended = await UserModel.find();
      console.log("Liste des users",allUserSended);
      res.status(200).json({message: "Liste des utilisateurs de la BBD", user: allUserSended})
    } catch (error) {
     return res.status(500).send("Aucune donnée dansla BDD.", error)
    }
  }
  sendAllUsers();
};
//*************************************************************************************************/



//***************************PUT : MODIFIER UN UTILISATEUR PAR SON IDENTIFIANT********************/
const userUpdateByID = async (req, res)=>{
      const myUserName = req.body;
      console.log(myUserName,req.params.id );
        try {
            const userChanged = await UserModel.findByIdAndUpdate(
                req.params.id, // id du user recherché
                myUserName, //attribut à mettre à jour
                {new : true} // renvoi le document modifié
            )
            if (userChanged) {
                console.log("Le nom de l'utilisateur a été mis à jour.", userChanged);
                res.status(200).json({message : "Le nom de l'utilisateur a été mis à jour.",userChanged})
            } else {
              return  res.status(404).json({message: "Aucune correspondance trouvée."})
            }
        } catch (error) {
           return res.status(500).json({message : "Erreur lors de la mise à jour.", error})
        }
}
//*************************************************************************************************/



//*************************** DELETE : SUPPRIMER UN UTILISATEUR PAR SON IDENTIFIANT********************/
const deleteOneUser = async (req, res)=> {
        try {
            const userDeleted = await UserModel.findByIdAndDelete(req.params.id)
            if (userDeleted) {
                console.log("L'utilisateur a été supprimé de la BDD.");
                res.status(200).json({message:"L'utilisateur a été supprimé de la BDD."})
            } else {
              return  res.status(404).json({message: "Aucune correspondance trouvée."})
            }

        } catch (error) {
           return res.status(500).json({message: "Erreur lors de la suppression.", error})
        }
}
module.exports = { createAllUser, createOneUser, allUsers,userUpdateByID,deleteOneUser };