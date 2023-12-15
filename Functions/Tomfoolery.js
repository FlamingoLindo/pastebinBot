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

    const excludedUsers = ["streamelements", "botbear1110", "fossabot"];
    const filteredMatches = matches.filter(match => !excludedUsers.includes(match));

    if (filteredMatches.length > 0) {
        const shuffledNames = shuffleArrayWithoutRepeats(filteredMatches);
        const selectedNames = shuffledNames.slice(0, 20); 
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

async function tomfoolery(client, channel) {
    client.on('message', async (channel, tags, message, self) => {
        if (self) return;

        if (['pb Tomfoolery'].includes(message)) {
            try {
                const result = await fetchData();

                client.say(channel, result);
            } catch (error) {
                console.error("Error in Tomfoolery command:", error.message);
            }
        }
    });
}

module.exports = {
  tomfoolery,
};
