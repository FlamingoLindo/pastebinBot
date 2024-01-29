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
const { Randomping } = require('./Functions/Randomping');
const { Tomfoolery } = require('./Functions/Tomfoolery')
const { reminderFishTrap } = require('./Functions/FishTrapRemind');
const { saveUsernameToDB } = require('./DataBase/userDataBase');
const { lastMessage } = require('./DataBase/lastMessage');
const { firstMessage } = require('./DataBase/firstMessage');
const { lastSeen } = require('./DataBase/lastSeen');
const { firstSeen } = require('./DataBase/firstSeen');
const { lastChannel } = require('./DataBase/lastChannel');
const { firstChannel } = require('./DataBase/firstChannel');
const { pbSay } = require('./Functions/pbSay');
const { pingWhenLive } = require('./test');
const { pbEmotes } = require('./Functions/pbEmotes');
const { channelsList } = require('./DataBase/channelsList');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
    },
    channels: [ 'arroz_fodao','flamingo_lindo','parladdd','qandlelanyarlathotepha','velcuz'],
});

client.setMaxListeners(15); 

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
        Randomping(client);
        reminderFishTrap(client);
        pbSay(client);
        pingWhenLive(client);
        pbEmotes(client);
    })
    .catch((error) => {
        console.error('Error connecting to Twitch:', error.message);
    });

    client.on('message', async (channel, userstate, message, self) => {
      if (self) return;
     
      try {
        const username = userstate['display-name'];
        const currentTime = new Date(); 
        await firstMessage(username, message);
        await lastMessage(username, message);
        await lastSeen(username, currentTime);
        await firstSeen(username, currentTime);
        await channelsList(username, channel, message); // Call the function here
        await lastChannel(username, channel, message);
        await firstChannel(username, channel, message);
        await Tomfoolery(client, channel, message);
        await Randomping(client, channel, message);
      } catch (error) {
        console.error('Error handling message:', error.message);
      }
    });

      
      

