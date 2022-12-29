const { Router } = require('express');
const router = Router();

//connexion à mysql */
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "archangel"
});
db.connect(function (err) { if (err) throw err; console.log("Connecté à la base de données MySQL!"); });

/* fin connexion à mysql */


//api récupère list par statut
router.get("/journal/:statut", async (req, res) => {
    const statut = req.params.statut //recuperation des donnees dans la table propection
    console.log(statut)
    db.query(`SELECT * FROM t_porteffeuille WHERE flag = '${statut}'`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send(" error !")
        } else {
            console.log('Resultats: ', data);
            res.send(data)
            console.log(data)
        }
    })
})
//récupere données du prospect par ID
router.get("/prospect/:ficheid", async (req, res) => {
    const ficheid = req.params.ficheid //recuperation des donnees dans la table propection
    console.log(ficheid)
    db.query(`SELECT * FROM t_porteffeuille WHERE ficheid = '${ficheid}'`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send(" error !")
            //console.log(sql)
        } else {
            console.log('Resultats: ', data);
            res.send(data)
            //console.log(sql)
        }
    })
})

//récupere list par défaut
router.get("/getAlljournal", async (req, res) => {

    db.query(`SELECT * FROM t_porteffeuille`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send(" error !")
            //console.log(sql)
        } else {
            console.log('Resultats: ', data);
            res.send(data)
            //console.log(sql)
        }
    })
})

module.exports = router