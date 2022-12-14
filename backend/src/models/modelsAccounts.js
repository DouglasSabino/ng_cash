const { db } = require('./connection');
const cuid = require('cuid');

const modelsAccounts = {
    getAccount: async (id) => {
      const SQL_GET_ACCOUNT = 'SELECT * FROM Accounts WHERE id=?'; 
      const [Accounts] = await db.query(SQL_GET_ACCOUNT, [id]);
      return Accounts;
    },
    createAccount: async () => {
      const SQL_CREATE_ACCOUNT = 'INSERT INTO Accounts (id, balance) VALUES (?,?)';
      const id = cuid();
      await db.query(SQL_CREATE_ACCOUNT, [id, 100.00]);
      return id;
    },
    deleteAccount: async (AccountId) =>  {
      const SQL_DELETE_ACCOUNT = 'DELETE FROM Accounts WHERE id=?';
      await db.query(SQL_DELETE_ACCOUNT, [AccountId]);
    },
}

module.exports = { modelsAccounts };