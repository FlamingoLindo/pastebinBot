const fetch = require('node-fetch');

async function fetchData() {
    try {
        const response = await fetch("https://velcuz.gay/ulog2");
        const data = await response.text();
        return processAndDisplay(data);
    } catch (error) {
        console.error("Error fetching the log:", error.message);
        return "Error fetching the log.";
    }
}

function processAndDisplay(data) {
    const regex = /#velcuz\s+(\S+):/g;
    const matches = [];
    let match;
    while ((match = regex.exec(data)) !== null) {
        matches.push(match[1]);
    }

    if (matches.length > 0) {
        const randomName = getRandomElement(matches);
        console.log(randomName);
        return randomName;
    } else {
        console.log("Nothing here.");
        return "Nothing here.";
    }
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

async function randomping(client, channel) {
    client.on('message', async (channel, tags, message, self) => {
        if (self) return;

        if (message.trim() === 'pb rp' || message.trim() === 'pb randomping') {
            try {
                const result = await fetchData();

                // Add the insult if the condition is met
                if (tags.username === "skryoo" || tags.username === "botbear1110" || tags.username === "streamelements" || tags.username === "supibot") {
                    client.say(channel, `fuck you @${tags.username} FeelsWeirdMan`);
                } else {
                    client.say(channel, result);
                }
            } catch (error) {
                console.error("Error in Tomfoolery command:", error.message);
            }
        }
    });
}


module.exports = {
    randomping,
};
