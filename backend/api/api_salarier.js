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

router.get("/listsalarier", async (req, res) => {

    db.query('SELECT * FROM t_salarier', (error, data) => {
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