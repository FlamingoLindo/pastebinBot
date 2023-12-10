require('dotenv').config();
const tmi = require('tmi.js');
const { pasteBinCommand, Atpastebinguy  } = require('./PastebinCommand');


const client = new tmi.Client({
    options: { debug: false },
    identity: {
        username: "",
        password: "",
    },
    channels: ['arroz_fodao'],
});

client.connect()
    .then(() => {
        console.log('Connected to Twitch.');
        pasteBinCommand(client);
        Atpastebinguy(client);
    })
    .catch((error) => {
        console.error('Error connecting to Twitch:', error);
    });


