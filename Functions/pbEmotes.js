function pbEmotes(client) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === 'pb emotes') {
            const cleanChannel = channel.replace(/^#/, '');

            client.say(channel, `https://emotes.raccatta.cc/twitch/${cleanChannel}`);
        }
    });
}

module.exports = {
    pbEmotes,
};
