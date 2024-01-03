// userDatabase.js
const { client } = require('./DBconnection');

const firstChannel = async (username, channel, message) => {
  try {
    const existingResult = await client.query('SELECT "first_channel" FROM "Users" WHERE "user_name" = $1', [username]);

    if (existingResult.rows.length === 0 || !existingResult.rows[0].first_channel) {
      const result = await client.query(
        'INSERT INTO "Users" ("user_name", "first_message", "first_channel") VALUES ($1, $2, $3) ' +
        'ON CONFLICT ("user_name") DO UPDATE SET "first_message" = EXCLUDED."first_message", "first_channel" = COALESCE("Users"."first_channel", EXCLUDED."first_channel")',
        [username, message, channel]
      );

      if (result.rowCount > 0) {
        console.log(`${username} was first seen in #${channel}`);
      }
    }
  } catch (error) {
    console.error('Error saving message to the database:', error.message);
  }
};

module.exports = {
  firstChannel,
};
