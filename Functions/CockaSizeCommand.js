function cockaSizeCommand(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === 'pb cocka') {
            const cockaSize = Math.random() * 36;
            const roundedCockaSize = cockaSize.toFixed(2);
            client.say(channel, `@${tags.username} cocka's size is ${roundedCockaSize} cm PagManzo`);
        }
    });
}

module.exports = {
    cockaSizeCommand,
};