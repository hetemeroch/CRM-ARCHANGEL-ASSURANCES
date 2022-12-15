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
router.post("/identification", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(`SELECT * FROM t_salarier WHERE username = '${username}' AND password = '${password}'  `, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send("Authentication error !")

        } else {
            console.log('Resultats: ', data);
            if (data.length === 0) res.send('Authentication error ! ')
            else res.send(data)



        }
    })
})

module.exports = router