function bruhCommand(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === 'pb bruh') {
            
            const bruh = Math.random() < 0.5;

            if(bruh)
            {
                client.say(channel, `@${tags.username} did not pass the bruh test cmonList`);
            }
            else
            {
                client.say(channel, `@${tags.username} passed the bruh test cooBruh`);
            }
            
        }
    });
}

module.exports = {
    bruhCommand,
};