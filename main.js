require('dotenv').config();
const tmi = require('tmi.js');
const { pasteBinCommand } = require('./Functions/PastebinCommand');
const { atPastebinguy } = require('./Functions/Atpastebinguy');
const { cockaSizeCommand } = require('./Functions/CockaSizeCommand');
const { bruhCommand } = require('./Functions/BruhCommand');
const { reminderAfterFish } = require('./Functions/ReminderAfterFish')
const { help } = require('./Functions/Commandsbp')

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
    },
    channels: ['velcuz', 'flamingo_lindo', 'parladdd'],
});

client.connect()
    .then(() => {
        console.log('Connected to Twitch.');
        pasteBinCommand(client);
        atPastebinguy(client);
        cockaSizeCommand(client);
        bruhCommand(client);
        reminderAfterFish(client);
        help(client);
    })
    .catch((error) => {
        console.error('Error connecting to Twitch:', error);
    });