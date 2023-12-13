function unsetRemind(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === 'pb -remind') {
        
        client.say(channel,"$unset reminder last");
        }
    });
}

module.exports = {
    unsetRemind,
};
