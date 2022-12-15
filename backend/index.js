const express = require('express');
const cors = require('cors');
const api_login = require('./api/api_login');

const app = express();
app.use(cors());
app.use(express.json());

const port = 8081;
app.listen(port, () => console.log(`Server in running on port ${port}`));

/* liaison app et api */
app.use(api_login);