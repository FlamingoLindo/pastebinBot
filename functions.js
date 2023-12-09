function pasteBin(client, channel) {
    const randomDate = () => {
        const day = Math.floor(Math.random() * 31) + 1; 
        const month = Math.floor(Math.random() * 12); 
        const year = 2024 
        
        const generatedDate = new Date(year, month, day);

        const formattedDate = generatedDate.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        });

        return formattedDate;
    };

    client.on('message', (channel, tags, message, self) => {
        if (self) return;
        const a = Math.floor(Math.random() * 100);
        if (message.toLowerCase() === '!pastebin') {
            if (a >= 50) {
                client.say(channel, `:D soon`);
            } else if (a < 10) {
                const generatedDate = randomDate();
                client.say(channel, `${generatedDate}`);
            } else if (a >= 60) {
                client.say(channel, `@Velcuz :tf:`);
            }
        }
    });
}


module.exports = {
    pasteBin,
};
