require('dotenv').config();
const tmi = require('tmi.js');
const { pasteBinCommand } = require('./Functions/PastebinCommand');
const { atPastebinguy } = require('./Functions/Atpastebinguy');
const { cockaSizeCommand } = require('./Functions/CockaSizeCommand');
const { bruhCommand } = require('./Functions/BruhCommand');
const { reminderAfterFish } = require('./Functions/ReminderAfterFish');
const { help } = require('./Functions/Commandsbp');
const { you } = require('./Functions/YOU');
const { unsetRemind } = require('./Functions/UnsetRemind');
const { randomping } = require('./Functions/Randomping');
const { tomfoolery } = require('./Functions/Tomfoolery')
const { reminderFishTrap } = require('./Functions/FishTrapRemind');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
    },
    channels: [ 'arroz_fodao','flamingo_lindo','parladdd','velcuz' ],
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
        you(client);
        unsetRemind(client);
        randomping(client);
        tomfoolery(client);
        reminderFishTrap(client);
    })
    .catch((error) => {
        console.error('Error connecting to Twitch:', error);
    });