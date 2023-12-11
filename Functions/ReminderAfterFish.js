function reminderAfterFish(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const isSupiBot = tags.username.toLowerCase() === 'flamingo_lindo';

        const caughtMatch = message.match(/(\w+) hooked something/);
        if (isSupiBot && caughtMatch) {
            const caughtUsername = caughtMatch[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m`);
        }

        const caughtMatch2 = message.match(/(\w+), You caught a/);
        if (isSupiBot && caughtMatch2) {
            const caughtUsername = caughtMatch2[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m`);
        }

        const caughtMatch3 = message.match(/(\w+) reeled in a /);
        if (isSupiBot && caughtMatch3) {
            const caughtUsername = caughtMatch3[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m`);
        }

        const caughtMatch4 = message.match(/(\w+) reels in a massive /);
        if (isSupiBot && caughtMatch4) {
            const caughtUsername = caughtMatch4[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m`);
        }

        const caughtMatch5 = message.match(/User "(\w+)"/);
        if (isSupiBot && caughtMatch5) {
            const caughtUsername = caughtMatch5[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m`);
        }

        const caughtMatch6 = message.match(/"(\w+) caught /);
        if (isSupiBot && caughtMatch6) {
            const caughtUsername = caughtMatch6[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m`);
        }

        const caughtMatch7 = message.match(/(\w+), You drag /);
        if (isSupiBot && caughtMatch7) {
            const caughtUsername = caughtMatch7[1];
            client.say(channel, `$remind @${caughtUsername} in 60 m`);
        }
    });
}

module.exports = {
    reminderAfterFish,
};
