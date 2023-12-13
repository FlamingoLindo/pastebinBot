function help(client, channel) {
 
    const htmlPageUrl = "https://flamingolindo.github.io/";

    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === 'pb help') {
            client.say(channel, `@${tags.username} Check out the commands here: ${htmlPageUrl}`);
        }
    });
}

module.exports = {
    help,
};
