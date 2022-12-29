const express = require('express');
const cors = require('cors');
const api_login = require('./api/api_login');
const api_passwordchange = require('./api/api_changepass');
const api_assiduite = require('./api/api_assiduite');
const api_dashboard = require('./api/api_dashboard');
const api_prod_jour = require('./api/api_prod_jour');
const api_info_client = require('./api/api_info_client');
const api_historique = require('./api/api_historique');
const api_liste_enfant = require('./api/api_list_enfant');
const api_journal = require('./api/api_journal');
const api_prospect = require('./api/api_prospect');
const api_salarier = require('./api/api_salarier');
const api_recherche = require('./api/api_recherche');
const app = express();
app.use(cors());
app.use(express.json());

const port = 8081;
app.listen(port, () => console.log(`Server in running on port ${port}`));

/* liaison app et api */
app.use(api_login);
app.use(api_passwordchange);
app.use(api_assiduite);
app.use(api_dashboard);
app.use(api_prod_jour);
app.use(api_info_client);
app.use(api_historique);
app.use(api_liste_enfant);
app.use(api_journal);
app.use(api_prospect);
app.use(api_salarier);
app.use(api_recherche);