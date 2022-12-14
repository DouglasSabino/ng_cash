const { routerAccount } = require('./routers/routersAccounts');
const { routerUsers } = require('./routers/routerUsers');
const { routerLogin } = require('./routers/routerLogin');
const { routerTransactions } = require('./routers/routerTransactions');
const { middlewareError } = require('./middlewares/hadleError');
const cors = require('cors');
const express = require('express');
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.use('/accounts', routerAccount);
app.use('/register', routerUsers);
app.use('/transactions', routerTransactions);
app.use('/login', routerLogin);
app.use(middlewareError);

app.listen(PORT, () => console.log(`Listen port ${PORT}`));