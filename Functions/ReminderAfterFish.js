function reminderAfterFish(client, channel) {
    const excludedUsers = ['@you', '@angler', '@he', '@ya'];

    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const isSupiBot = tags.username.toLowerCase() === 'supibot';

        const caughtMatch = message.match(/(\w+) hooked something/);
        if (isSupiBot && caughtMatch) {
            const caughtUsername = caughtMatch[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch2 = message.match(/(\w+), caught a/);
        if (isSupiBot && caughtMatch2) {
            const caughtUsername = caughtMatch2[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch3 = message.match(/(\w+) reeled in a /);
        if (isSupiBot && caughtMatch3) {
            const caughtUsername = caughtMatch3[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch4 = message.match(/(\w+) reels in/);
        if (isSupiBot && caughtMatch4) {
            const caughtUsername = caughtMatch4[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch5 = message.match(/User "(\w+)"/) && message.match(/(.*).cooldown\)/);
        if (isSupiBot && caughtMatch5) {
            const caughtUsername = caughtMatch5[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch6 = message.match(/"(\w+) caught /);
        if (isSupiBot && caughtMatch6) {
            const caughtUsername = caughtMatch6[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch9 = message.match(/(\w+) caught a captivating/);
        if (isSupiBot && caughtMatch9) {
            const caughtUsername = caughtMatch9[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch10 = message.match(/(\w+), You caught a/);
        if (isSupiBot && caughtMatch10) {
            const caughtUsername = caughtMatch10[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch11 = message.match(/(\w+), the secretive angler/);
        if (isSupiBot && caughtMatch11) {
            const caughtUsername = caughtMatch11[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch12 = message.match(/(\w+), ya caught a/);
        if (isSupiBot && caughtMatch12) {
            const caughtUsername = caughtMatch12[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch13 = message.match(/(\w+) triumphantly hooks a/);
        if (isSupiBot && caughtMatch13) {
            const caughtUsername = caughtMatch13[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch14 = message.match(/(\w+) hooked a whopper/);
        if (isSupiBot && caughtMatch14) {
            const caughtUsername = caughtMatch14[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch15 = message.match(/User "(\w+)" caught a/);
        if (isSupiBot && caughtMatch15) {
            const caughtUsername = caughtMatch15[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch16 = message.match(/User (\w+) caught a/);
        if (isSupiBot && caughtMatch16) {
            const caughtUsername = caughtMatch16[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch17 = message.match(/(\w+) hooked a massive/);
        if (isSupiBot && caughtMatch17) {
            const caughtUsername = caughtMatch17[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch18 = message.match(/(\w+), a skilled angler/);
        if (isSupiBot && caughtMatch18) {
            const caughtUsername = caughtMatch18[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch19 = message.match(/While fishing, (\w+)/);
        if (isSupiBot && caughtMatch19) {
            const caughtUsername = caughtMatch19[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch20 = message.match(/(\w+) hooked a/);
        if (isSupiBot && caughtMatch20) {
            const caughtUsername = caughtMatch20[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch21 = message.match(/(\w+) catches a/);
        if (isSupiBot && caughtMatch21) {
            const caughtUsername = caughtMatch21[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch22 = message.match(/"(\w+)" caught a tiny/);
        if (isSupiBot && caughtMatch22) {
            const caughtUsername = caughtMatch22[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch23 = message.match(/"(\w+)" reeled in a/);
        if (isSupiBot && caughtMatch23) {
            const caughtUsername = caughtMatch23[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch24 = message.match(/(\w+) cast his line/);
        if (isSupiBot && caughtMatch24) {
            const caughtUsername = caughtMatch24[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch25 = message.match(/"(\w+)" boasted when/);
        if (isSupiBot && caughtMatch25) {
            const caughtUsername = caughtMatch25[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch26 = message.match(/(\w+) caught a/);
        if (isSupiBot && caughtMatch26) {
            const caughtUsername = caughtMatch26[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch27 = message.match(/"(\w+)" hooks a massive/);
        if (isSupiBot && caughtMatch27) {
            const caughtUsername = caughtMatch27[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch28 = message.match(/(\w+) pulled the line/);
        if (isSupiBot && caughtMatch28) {
            const caughtUsername = caughtMatch28[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch29 = message.match(/"(\w+)" cast a line/);
        if (isSupiBot && caughtMatch29) {
            const caughtUsername = caughtMatch29[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        const caughtMatch30 = message.match(/"(\w+)" hooked a/);
        if (isSupiBot && caughtMatch30) {
            const caughtUsername = caughtMatch30[1];
            if (!excludedUsers.includes(`@${caughtUsername.toLowerCase()}`)) {
                client.say(channel, `$remind @${caughtUsername} in 30 m You can fish again FeelsOkayMan`);
            }
        }

        
    });
}

module.exports = {
    reminderAfterFish,
};
