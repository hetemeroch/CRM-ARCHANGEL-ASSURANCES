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

router.post("/changepassword", async (req, res) => {
    const email = req.body.email
    const pass = req.body.pass

    db.query(`UPDATE t_salarier SET password = '${pass}' WHERE emailpro = '${email}'`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send("Change password error !")

        } else {
            console.log('Resultats: ', data);
            res.send("Change password error !");

        }
    })

})

module.exports = router