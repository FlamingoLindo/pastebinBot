function reminderAfterFish(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const blacklistedUser = '@you';

        if (tags.username.toLowerCase() === blacklistedUser.toLowerCase()) {
            console.log(`User ${blacklistedUser} is blacklisted. Skipping reminder.`);
            return;
        }

        const isSupiBot = tags.username.toLowerCase() === 'supibot';

            const caughtMatch = message.match(/(\w+) hooked something/);
        if (isSupiBot && caughtMatch) {
            const caughtUsername = caughtMatch[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

            const caughtMatch2 = message.match(/(\w+), caught a/);
        if (isSupiBot && caughtMatch2) {
            const caughtUsername = caughtMatch2[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch3 = message.match(/(\w+) reeled in a /);
        if (isSupiBot && caughtMatch3) {
            const caughtUsername = caughtMatch3[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch4 = message.match(/(\w+) reels in/);
        if (isSupiBot && caughtMatch4) {
            const caughtUsername = caughtMatch4[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch5 = message.match(/User "(\w+)"/) && message.match(/(.*).cooldown\)/); 
        if (isSupiBot && caughtMatch5) {
            const caughtUsername = caughtMatch5[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch6 = message.match(/"(\w+) caught /);
        if (isSupiBot && caughtMatch6) {
            const caughtUsername = caughtMatch6[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch9 = message.match(/(\w+) caught a captivating/);
        if (isSupiBot && caughtMatch9) {
            const caughtUsername = caughtMatch9[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);      
        }

        const caughtMatch10 = message.match(/(\w+), You caught a/);
        if (isSupiBot && caughtMatch10) {
            const caughtUsername = caughtMatch10[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }

        const caughtMatch11 = message.match(/(\w+), the secretive angler/);
        if (isSupiBot && caughtMatch11) {
            const caughtUsername = caughtMatch11[1];
            client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
        }
        }
    );
    
    //TRAP
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
    
            const blacklistedUser = '@you';
    
            if (tags.username.toLowerCase() === blacklistedUser.toLowerCase()) {
                console.log(`User ${blacklistedUser} is blacklisted. Skipping reminder.`);
                return;
            }
    
        const senderUsername = tags.username;
        const trap = "$fish trap remind";
        const caughtMatch12 = message.includes(trap);
    
        if (!self && caughtMatch12) {
            client.say(channel, `$remind @${senderUsername}, in 60m Time to reel in your trap`);
        }
    });
    
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
    
            const blacklistedUser = '@you';
    
            if (tags.username.toLowerCase() === blacklistedUser.toLowerCase()) {
                console.log(`User ${blacklistedUser} is blacklisted. Skipping reminder.`);
                return;
            }
            
        const senderUsername = tags.username;
        const trapReset = "$fish trap reset remind";
        const caughtMatch13 = message.includes(trapReset);
    
        if (!self && caughtMatch13) {
            client.say(channel, `$remind @${senderUsername}, in 60m Time to reel in your trap`);
        }
    });
}

module.exports = {
    reminderAfterFish,
};


