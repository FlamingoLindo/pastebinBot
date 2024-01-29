function normalizeMessage(message) {
    const lookalikeMap = {
        'ո': 'n', // Armenian small letter vo
        'а': 'a', // Cyrillic small letter a
        'е': 'e', // Cyrillic small letter ie
        'і': 'i', // Cyrillic small letter byelorussian-ukrainian i
        // Add more mappings as needed
    };

    return message.split('').map(char => lookalikeMap[char] || char).join('');
}

function pbSay(client, channel) {
    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        const caughtMatch = message.match(/pb say (.+)/);

        if (caughtMatch) {
            const restOfTheMessage = caughtMatch[1];
            const normalizedMessage = normalizeMessage(restOfTheMessage);

            if (process.env.CERTAIN_WORDS) {
                const certainWords = process.env.CERTAIN_WORDS.split(',');

                if (certainWords.some(word => normalizedMessage.includes(word))) {
                    client.say(channel, "Meow");
                } else {
                    client.say(channel, restOfTheMessage);
                }
            } else {
                console.error("CERTAIN_WORDS is not defined in the environment variables.");
            }
        }
    });
}

module.exports = {
    pbSay,
};
