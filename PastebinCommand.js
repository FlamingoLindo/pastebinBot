function pasteBinCommand(client, channel) {
    let generatedDate = new Date(); 

    function randomDate() {
        const day = Math.floor(Math.random() * 31) + 1;
        const month = Math.floor(Math.random() * 12);
        const year = 2024;

        generatedDate = new Date(year, month, day);
    }

    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === '!pastebin') {
            randomDate(); 
            const phrases = [`:D soon`, `@Velcuz :tf:`, generatedDate.toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
            })];

        var choosenPhrase = phrases[Math.floor(Math.random()*phrases.length)]

        client.say(channel,choosenPhrase);
        }
    });
}

function Atpastebinguy(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        if (message.toLowerCase() === '@pastebinguy' || message.toLowerCase() === 'pastebinguy' || 
            message.toLowerCase() === '@pastebinguy,' || message.toLowerCase() === 'pastebinguy,') {
                
            client.say(channel, `hello @${tags.username}`);
        }
    });
}

module.exports = {
    pasteBinCommand,
    Atpastebinguy,
};
