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

    const excludedUsers = ["streamelements", "botbear1110", "fossabot", "namtheweebs", "pastebinguy", "supibot", "potatbotat ", "kryha5555", "aapoapustaja"];
    const filteredMatches = matches.filter(match => !excludedUsers.includes(match));

    if (filteredMatches.length > 0) {
        const shuffledNames = shuffleArrayWithoutRepeats(filteredMatches);
        const selectedNames = shuffledNames.slice(0, 15);
        const output = selectedNames.join(" ");
        console.log(output);
        return output;
    } else {
        console.log("Nothing here.");
        return "Nothing here.";
    }
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function shuffleArrayWithoutRepeats(array) {
    const uniqueValues = new Set(array);
    const uniqueArray = Array.from(uniqueValues);
    for (let i = uniqueArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueArray[i], uniqueArray[j]] = [uniqueArray[j], uniqueArray[i]];
    }
    return uniqueArray;
}

let lastTomfooleryTime = 0; 

async function tomfoolery(client, channel) {
    client.on('message', async (channel, tags, message, self) => {
        if (self) return;

        if (message.trim() === 'pb Tomfoolery') {
            const currentTime = Date.now();
            const cooldownTime = 60 * 1000; 

            if (currentTime - lastTomfooleryTime >= cooldownTime) {
                try {
                    const result = await fetchData();

                    if (tags.username === "skryoo" || tags.username === "botbear1110" || tags.username === "streamelements" || tags.username === "supibot" || tags.username === "5pic3") {
                        client.say(channel, `fuck you @${tags.username} FeelsWeirdMan`);
                    } else {
                        client.say(channel, result);
                    }

                    lastTomfooleryTime = currentTime;
                } catch (error) {
                    console.error("Error in Tomfoolery command:", error.message);
                }
            } else {
                client.say(channel, `@${tags.username} Tomfoolery`);
            }
        }
    });
}

module.exports = {
    tomfoolery,
};
