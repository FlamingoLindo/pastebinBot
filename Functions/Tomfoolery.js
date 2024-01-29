require('dotenv').config();
const pg = require('pg');

const config = {
    host: process.env.Host,
    port: 5432,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
    ssl: { rejectUnauthorized: false },
};

const pool = new pg.Pool(config);

const excludedUsernames = process.env.BannedUserFromPings.split(',');
const cooldowns = {};

async function Tomfoolery(tmiClient, channel, message) {
    const cooldownTime = 10000;

    const lowerCaseCommand = 'pb tomfoolery';
    if (message.toLowerCase() === lowerCaseCommand) {
        const now = Date.now();
        const lastUsedTime = cooldowns[channel] || 0;

        if (now - lastUsedTime >= cooldownTime) {
            cooldowns[channel] = now;

            return new Promise((resolve, reject) => {
                pool.connect(async (err, client, done) => {
                    if (err) reject(err);

                    const placeholders = excludedUsernames.map((_, index) => `$${index + 2}`).join(', ');

                    const queryText = `
                        SELECT "user_name"
                        FROM "Users"
                        WHERE "user_name" NOT IN (${placeholders})
                        AND $1 = ANY("channels")
                        ORDER BY RANDOM()
                        LIMIT 14
                    `;

                    const queryValues = [channel, ...excludedUsernames];

                    client.query(queryText, queryValues, (err, res) => {
                        done();
                        if (err) {
                            reject(err);
                        } else {
                            const userNames = res.rows.map(row => row.user_name);
                            const userListMessage = `Tomfoolery 🔔 ${userNames.join(', ')}`;
                            tmiClient.say(channel, userListMessage);
                            resolve();
                        }
                    });
                });
            });
        }
    }
}

module.exports = { Tomfoolery };
