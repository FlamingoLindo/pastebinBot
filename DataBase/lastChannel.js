// userDatabase.js
const { client } = require('./DBconnection');

const lastChannel = async (username, channel, message) => {
  try {
    const result = await client.query(
      'INSERT INTO "Users" ("user_name", "last_message", "last_channel") VALUES ($1, $2, $3) ' +
      'ON CONFLICT ("user_name") DO UPDATE SET "last_message" = EXCLUDED."last_message", "last_channel" = EXCLUDED."last_channel"',
      [username, message, channel]
    );
    
    if (result.rowCount > 0) {
      console.log(`${username} was last seen in #${channel}`);
    }
  } catch (error) {
    console.error('Error saving message to the database:', error.message);
  }
};

module.exports = {
  lastChannel,
};
