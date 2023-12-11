function atPastebinguy(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === '@pastebinguy' || message.toLowerCase() === 'pastebinguy' || 
            message.toLowerCase() === '@pastebinguy,' || message.toLowerCase() === 'pastebinguy,'||
            message.toLowerCase() === 'hello @pastebinguy' || message.toLowerCase() === 'hello pastebinguy' || 
            message.toLowerCase() === 'hello @pastebinguy,' || message.toLowerCase() === 'hello pastebinguy,' ||
            message.toLowerCase() === '@pastebinguy hello' || message.toLowerCase() === 'pastebinguy hello' || 
            message.toLowerCase() === '@pastebinguy, hello' || message.toLowerCase() === 'pastebinguy, hello'||
            message.toLowerCase() === 'yo @pastebinguy' || message.toLowerCase() === 'yo pastebinguy' || 
            message.toLowerCase() === 'yo @pastebinguy,' || message.toLowerCase() === 'yo pastebinguy,' ||
            message.toLowerCase() === '@pastebinguy yo' || message.toLowerCase() === 'pastebinguy yo' || 
            message.toLowerCase() === '@pastebinguy, yo' || message.toLowerCase() === 'pastebinguy, yo') {
                
            client.say(channel, `hello @${tags.username}`);
        }
    });
}

module.exports = {
    atPastebinguy,
};