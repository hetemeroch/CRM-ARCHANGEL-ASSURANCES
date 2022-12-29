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
router.get("/client/:contratid", async (req, res) => {
    const contratid = req.params.contratid
    //console.log(contratid)
    let requete = db.query(`SELECT *  FROM t_porteffeuille WHERE ficheid = '${contratid}'`, (error, data) => {
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

router.post("/editclient", async (req, res) => {
    const editcontrat = req.body
    //console.log(editcontrat)
    db.query(`UPDATE t_porteffeuille SET civilite = '${editcontrat.civilite}', nomclient = '${editcontrat.nomclient}', prenomclient = '${editcontrat.prenomclient}', naissance = '${editcontrat.naissance}', situationfamiliale = '${editcontrat.situationfamiliale}', regime = '${editcontrat.regime}', numss = '${editcontrat.numss}', numssconjoint = '${editcontrat.numssconjoint}', regimeconjoint = '${editcontrat.regimeconjoint}', nomconjoint = '${editcontrat.nomconjoint}', prenomconjoint = '${editcontrat.prenomconjoint}', naissanceconjoint = '${editcontrat.naissanceconjoint}', civiliteconjoint = '${editcontrat.civiliteconjoint}', email = '${editcontrat.email}', telephone1 = '${editcontrat.telephone1}', telephone2 = '${editcontrat.telephone2}', telephone3 = '${editcontrat.telephone3}', codepostal = '${editcontrat.codepostal}', ville = '${editcontrat.ville}', adresse = '${editcontrat.adresse}', attribution = '${editcontrat.attribution}', flag = '${editcontrat.flag}', sousflag = '${editcontrat.sousflag}', flaggestion = '${editcontrat.flaggestion}', daterappel = '${editcontrat.daterappel}', heurerappel = '${editcontrat.heurerappel}', derniereaction = '2022-11-25', profession1 = '${editcontrat.profession1}', profession2 = '${editcontrat.profession2}', anneeprod = '${editcontrat.anneeprod}' WHERE ficheid = '${editcontrat.contratid}'`, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send("Error !")
        } else {
            console.log('Resultats: ', data);
            res.send(data)
            console.log(data)
        }
    })
})

router.post("/editcontrat", async (req, res) => {
    const editcontrat = req.body
    //console.log(editcontrat)
    db.query(`UPDATE t_porteffeuille SET compagnie = '${editcontrat.compagnie}', couverture = '${editcontrat.couverture}', gamme = '${editcontrat.gamme}', formule = '${editcontrat.formule}', cotisationmens = '${editcontrat.cotisationmens}', cotisationann = '${editcontrat.cotisationann}', numcontrat = '${editcontrat.numcontrat}', fraisdossier = '${editcontrat.fraisdossier}', souscription = '${editcontrat.souscription}', effet = '${editcontrat.effet}', banque = '${editcontrat.banque}', cpbanque = '${editcontrat.cpbanque}', villebanque = '${editcontrat.villebanque}', adressebanque = '${editcontrat.adressebanque}', iban = '${editcontrat.iban}', bic = '${editcontrat.bic}', prelevement = '${editcontrat.prelevement}', taux = '${editcontrat.taux}', moisgratuit = '${editcontrat.moisgratuit}', mutuelleresil = '${editcontrat.mutuelleresil}', police = '${editcontrat.police}', echeance = '${editcontrat.echeance}', dateresil = '${editcontrat.dateresil}', typeresil = '${editcontrat.typeresil}' WHERE ficheid = '${editcontrat.contratid}' `, (error, data) => {
        if (error) {
            console.log("error ocurred", error);
            res.send("Error !")
        } else {
            console.log('Resultats: ', data);
            res.send(data)
            console.log(data)
        }
    })
})



module.exports = router