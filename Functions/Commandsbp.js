function help(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === 'pb help') {
            client.say(channel, `@${tags.username} 'pb cocka', 'pb bruh', you can @ me and I will answer back with hello, 
            !pastebin (mostly for velcuz chat Tomfoolery ) and whenever you get a fish I'll automatically remind you.`);
        }
    });
}

module.exports = {
    help,
};