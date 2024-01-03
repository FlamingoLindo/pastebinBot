// userDatabase.js
const { client } = require('./DBconnection');

const firstSeen = async (username, currentTime) => {
  try {
    const existingResult = await client.query('SELECT "first_seen" FROM "Users" WHERE "user_name" = $1', [username]);
    if (existingResult.rows.length === 0) {
      const result = await client.query('INSERT INTO "Users" ("user_name", "first_seen") VALUES ($1, $2)', [username, currentTime]);
      if (result.rowCount > 0) {
        console.log(`${username}'s "first_seen" was saved to the database`);
      }
    } 
  } catch (error) {
    console.error('Error saving message to the database:', error.message);
  }
};

module.exports = {
  firstSeen,
};
