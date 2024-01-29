const { client } = require('./DBconnection');

const channelsList = async (username, channel, message) => {
    try {
      await client.query('BEGIN');
  
      const res = await client.query(
        'SELECT "channels" FROM "Users" WHERE "user_name" = $1',
        [username]
      );
  
      let channels = [];
      if (res.rowCount > 0 && res.rows[0].channels != null) {
        channels = res.rows[0].channels;
      }
  
      if (!channels.includes(channel)) {
        channels.push(channel);
      }
  
      const result = await client.query(
        'INSERT INTO "Users" ("user_name", "last_message", "channels") VALUES ($1, $2, $3) ' +
        'ON CONFLICT ("user_name") DO UPDATE SET "last_message" = EXCLUDED."last_message", "channels" = EXCLUDED."channels"',
        [username, message, channels]
      );
  
      if (result.rowCount > 0) {
        console.log(`${username} was last seen in #${channel}`);
      }
  
      await client.query('COMMIT');
    } catch (error) {
        
      await client.query('ROLLBACK');
      console.error('Error saving message to the database:', error.message);
    }
  };

module.exports = {
  channelsList,
};
