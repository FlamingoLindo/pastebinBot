function reminderAfterFish(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const isSupiBot = tags.username.toLowerCase() === 'Supibot';

        const caughtMatch = message.match(/(\w+) hooked something/);
        if (isSupiBot && caughtMatch) {
            const caughtUsername = caughtMatch[1];
            client.say(channel, `$remind @${caughtUsername} in 30m`);
        }

        const caughtMatch2 = message.match(/(\w+), You caught a/);
        if (isSupiBot && caughtMatch2) {
            const caughtUsername = caughtMatch2[1];
            client.say(channel, `$remind @${caughtUsername} in 30m`);
        }
    });
}

module.exports = {
    reminderAfterFish,
};
