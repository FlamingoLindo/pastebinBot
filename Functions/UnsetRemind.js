function unsetRemind(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        const match = message.match(/^pb -remind (\w+)/i);
        
        if (match) {
            const id = match[1];
            client.say(channel, `$unset reminder ${id}`);
        }
    });
}

module.exports = {
    unsetRemind,
};
