require('dotenv').config();
const tmi = require('tmi.js');
const { pasteBin, response } = require('./functions');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_PASSWORD,
    },
    channels: ['arroz_fodao'],
});

client.connect().catch(console.error);

pasteBin(client);