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

router.post("/updateprospect", async (req, res) => {
    const prospect = req.body
    //console.log(prospect)

    let test = db.query(`UPDATE t_porteffeuille SET civilite = '${prospect.civilite}', nomclient = '${prospect.nomclient}', prenomclient = '${prospect.prenomclient}', naissance = '${prospect.naissance}', email = '${prospect.email}', telephone1 = '${prospect.telephone1}', telephone2 = '${prospect.telephone2}', telephone3 = '${prospect.telephone3}', codepostal = '${prospect.codepostal}', ville = '${prospect.ville}', adresse = '${prospect.adresse}',civiliteconjoint = '${prospect.civiliteconjoint}' , nomconjoint = '${prospect.nomconjoint}', prenomconjoint = '${prospect.prenomconjoint}', naissanceconjoint = '${prospect.naissanceconjoint}', numss = '${prospect.numss}', numssconjoint = '${prospect.numssconjoint}', regime = '${prospect.regime}', regimeconjoint = '${prospect.regimeconjoint}', situationfamiliale = '${prospect.situationfamiliale}', profession1 = '${prospect.profession}', profession2 = '${prospect.professionconjoint}', flag = '${prospect.flag}', sousflag = '${prospect.sousflag}', dateflag = '${prospect.dateflag}', daterappel = '${prospect.daterappel}', heurerappel = '${prospect.heurerappel}' WHERE ficheid = '${prospect.ficheid}'`, (error, data) => {
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

//add fiche

router.post("/newclient", async (req, res) => {
    const newclient = req.body
    let test = db.query(`INSERT INTO t_porteffeuille (ficheid, civilite, nomclient, prenomclient, naissance, situationfamiliale, regime, numss, numssconjoint, regimeconjoint, nomconjoint, prenomconjoint, naissanceconjoint, civiliteconjoint, email, telephone1, telephone2, telephone3, codepostal, ville, adresse, provenance, attribution, banque, cpbanque, villebanque, adressebanque, iban, bic, prelevement, compagnie, couverture, gamme, formule, cotisationmens, cotisationann, numcontrat, fraisdossier, taux, souscription, effet, moisgratuit, mutuelleresil, cpresil, villeresil, adresseresil, demandeur, police, echeance, dateresil, typeresil, etatresil, cotation, creation, segment, acteur, gestion, flag, sousflag, flaggestion, daterappel, heurerappel, derniereaction, profession1, profession2, anneeprod, base) VALUES (NULL, '${newclient.civilite}', '${newclient.nomclient}', '${newclient.prenomclient}', '${newclient.naissance}', '', '', '', '', '', '', '', '', '', '${newclient.email}', '${newclient.telephone1}', '', '', '', '', '', '${newclient.provenance}', '${newclient.attribution}', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '${newclient.creation}', '', '', '', 'fiche à qualifier', '', '', '', '', '', '', '', '', '${newclient.base}')`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send(" error !")
        } else {
            console.log('Resultats: ', data);
            res.send(data)
            console.log(test)
        }
    })
})
module.exports = router