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

router.post("/assiduite", async (req, res) => {
    const debut = req.body.debut
    const fin = req.body.fin
    const pseudonyme = req.body.pseudonyme

    console.log(debut)
    console.log(fin)
    console.log(pseudonyme)

    db.query(`SELECT * FROM t_pointage WHERE pseudonyme = '${pseudonyme}' and date BETWEEN '${debut}' AND '${fin}'`, (error, data) => {
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