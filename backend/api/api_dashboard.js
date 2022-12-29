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

router.post("/dashboard", async (req, res) => {
    const debut_mois = req.body.debut_mois
    const fin_mois = req.body.fin_mois


    db.query(`SELECT cotisationmens, cotisationann, acteur, compagnie, flag, ficheid, souscription  FROM t_porteffeuille WHERE souscription BETWEEN '${debut_mois}' AND '${fin_mois}'`, (error, data) => {
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

module.exports = router