require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.Host,
  port: 5432,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
  ssl: { rejectUnauthorized: false },
  keepAlive: true,
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database.');
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL database:', error.message);
  });

module.exports = {
  client,
};