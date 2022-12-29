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

router.get("/listeenfant/:contratid", async (req, res) => {
    const contratid = req.params.contratid
    db.query(`SELECT * FROM t_enfant WHERE ficheid = '${contratid}'`, (error, data) => {
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

router.post("/addenfant/", async (req, res) => {
    const inputenfant = req.body
    //console.log(inputenfant)
    db.query(`INSERT INTO t_enfant (enfantid, ficheid, nomenfant, prenomenfant, naissance, civiliteenfant, regimeenfant, numssenfant) VALUES (NULL, '${inputenfant.contratid}', '${inputenfant.nomenfant}', '${inputenfant.prenomenfant}', '${inputenfant.naissance}', '${inputenfant.civiliteenfant}', '${inputenfant.regimeenfant}', '${inputenfant.numssenfant}');`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send(" error !")
        } else {
            console.log('Resultats: ', data);
            res.send(inputenfant)
            console.log(data)
        }
    })
})

module.exports = router