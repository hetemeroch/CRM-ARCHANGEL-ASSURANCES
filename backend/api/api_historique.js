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

router.get("/historique/:contratid", async (req, res) => {
    const contratid = req.params.contratid
    db.query(`SELECT * FROM t_commentaire WHERE ficheid = '${contratid}'`, (error, data) => {
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
/* ajout commentaire */
router.post("/commentaire/", async (req, res) => {
    const newhistorique = req.body
    //console.log(newhistorique)

    db.query(`INSERT INTO t_commentaire (commentaireid, ficheid, date, heure, commentaire, conseiller) VALUES (NULL, '${newhistorique.contratid}', '${newhistorique.date}', '${newhistorique.heure}', '${newhistorique.commentaire}', 'hetemetest')`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send(" error !")

        } else {
            console.log('Resultats: ', data);
            res.send(newhistorique)
            console.log(data)
        }
    })
})
module.exports = router