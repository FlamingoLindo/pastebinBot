// userDatabase.js
const { client } = require('./DBconnection');

const lastMessage = async (username, message) => {
  try {
    const result = await client.query('INSERT INTO "Users" ("user_name", "last_message") VALUES ($1, $2) ON CONFLICT ("user_name") DO UPDATE SET "last_message" = EXCLUDED."last_message"', [username, message]);
    
    if (result.rowCount > 0) {
      console.log(`${username}'s last message was updated to the database`);
    }
  } catch (error) {
    console.error('Error saving message to the database:', error.message);
  }
};

module.exports = {
  lastMessage,
};
