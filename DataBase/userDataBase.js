// userDatabase.js
const { client } = require('./DBconnection');

const saveUsernameToDB = async (username) => {
  try {
    const result = await client.query('INSERT INTO "Users" ("user_name") VALUES ($1) ON CONFLICT ("user_name") DO NOTHING RETURNING *', [username]);
    if (result.rowCount > 0) {
      console.log(`Username ${username} saved to the database.`);
    } 
  } catch (error) {
    console.error('Error saving username to the database:', error.message);
  }
};

module.exports = {
  saveUsernameToDB,
};
