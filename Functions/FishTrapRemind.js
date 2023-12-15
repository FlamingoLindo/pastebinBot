function reminderFishTrap(client, channel) { 

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
        client.say(channel, `$remind @${senderUsername} in 60m Time to reel in your trap`);
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
        client.say(channel, `$remind @${senderUsername} in 60m Time to reel in your trap`);
    }
});
}

module.exports = {
    reminderFishTrap,
};