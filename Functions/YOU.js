function you(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === 'pb @you') {
        
        client.say(channel,"https://files.catbox.moe/wial7z.mp4");
        }
    });
}

module.exports = {
    you,
};
