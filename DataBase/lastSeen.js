// userDatabase.js
const { client } = require('./DBconnection');

const lastSeen = async (username, currentTime) => {
  try {
    const result = await client.query('INSERT INTO "Users" ("user_name", "last_seen") VALUES ($1, $2) ON CONFLICT ("user_name") DO UPDATE SET "last_seen" = EXCLUDED."last_seen"', [username, currentTime]);
    
    if (result.rowCount > 0) {
      console.log(`${username}'s "last_seen" was updated to the database`);
    }
  } catch (error) {
    console.error('Error saving lastSeen to the database:', error.message);
  }
};

module.exports = {
  lastSeen,
};
