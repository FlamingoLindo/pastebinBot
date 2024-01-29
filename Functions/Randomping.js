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

let lastRandompingTime = 0;
async function Randomping(tmiClient, channel, message) {
    const currentTime = Date.now();
    const cooldown = 0;
    if (currentTime - lastRandompingTime >= cooldown && message && message.toLowerCase() === 'pb rp') {
        lastRandompingTime = currentTime;

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
                    LIMIT 1
                `;

                const queryValues = [channel, ...excludedUsernames];

                client.query(queryText, queryValues, (err, res) => {
                    done();
                    if (err) {
                        reject(err);
                    } else {
                        const userNames = res.rows.map(row => row.user_name);
                        const userListMessage = `DinkDonk ${userNames}`;
                        tmiClient.say(channel, userListMessage);
                        resolve();
                    }
                });
            });
        });
    }
}

module.exports = { Randomping };
