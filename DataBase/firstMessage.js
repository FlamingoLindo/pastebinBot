// userDatabase.js
const { client } = require('./DBconnection');

const firstMessage = async (username, message) => {
  try {
    const existingResult = await client.query('SELECT "first_message" FROM "Users" WHERE "user_name" = $1', [username]);
    if (existingResult.rows.length === 0) {
      const result = await client.query('INSERT INTO "Users" ("user_name", "first_message") VALUES ($1, $2)', [username, message]);
      if (result.rowCount > 0) {
        console.log(`${username}'s first message was saved to the database`);
      }
    } 
  } catch (error) {
    console.error('Error saving message to the database:', error.message);
  }
};

module.exports = {
  firstMessage,
};
