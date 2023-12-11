function reminderAfterFish(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const isSupiBot = tags.username.toLowerCase() === 'supibot';

        const caughtMatch = message.match(/(\w+) hooked something/);
        if (isSupiBot && caughtMatch) {
            const caughtUsername = caughtMatch[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch2 = message.match(/(\w+), You caught a/);
        if (isSupiBot && caughtMatch2) {
            const caughtUsername = caughtMatch2[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch3 = message.match(/(\w+) reeled in a /);
        if (isSupiBot && caughtMatch3) {
            const caughtUsername = caughtMatch3[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch4 = message.match(/(\w+) reels in a massive /);
        if (isSupiBot && caughtMatch4) {
            const caughtUsername = caughtMatch4[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch5 = message.match(/User (\w+)/) && message.match(/(.*).cooldown\)/); 
        if (isSupiBot && caughtMatch5) {
            const caughtUsername = caughtMatch5[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch6 = message.match(/"(\w+) caught /);
        if (isSupiBot && caughtMatch6) {
            const caughtUsername = caughtMatch6[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch7 = message.match(/(\w+), You drag /);
        if (isSupiBot && caughtMatch7) {
            const caughtUsername = caughtMatch7[1];
            client.say(channel, `$remind @${caughtUsername} in 60 m Time to reel in your trap`);
        }

        const caughtMatch8 = message.match(/(\w+), You have laid/);
        if (isSupiBot && caughtMatch8) {
            const caughtUsername = caughtMatch8[1];
            client.say(channel, `$remind @${caughtUsername} in 60 m Time to reel in your trap`);
        }

        const caughtMatch9 = message.match(/(\w+) caught a captivating/);
        if (isSupiBot && caughtMatch9) {
            const caughtUsername = caughtMatch9[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch10 = message.match(/(\w+) caught a/);
        if (isSupiBot && caughtMatch10) {
            const caughtUsername = caughtMatch10[1];
            if(caughtUsername == '@You'){
                console.log('User "You" does not exist LULE')
            }
            else{
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
            
        }
    });
}

module.exports = {
    reminderAfterFish,
};
