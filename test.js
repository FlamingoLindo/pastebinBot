const puppeteer = require('puppeteer');

const url = 'https://flamingolindo.github.io/meow.html';

async function getNames() {
  const usersToExclude = ['supibot', 'flamingo_lindo', 'potatbotat', 'pastebinguy']; 

  try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);

      await page.waitForTimeout(2000); 

      const names = await page.evaluate((excludeList) => {
          const element = document.getElementById('r');
          if (!element) return [];

          const allNames = element.textContent.trim().split(/\s+/);
          return allNames.filter(name => !excludeList.includes(name));
      }, usersToExclude);

      await browser.close();

      return names;
  } catch (error) {
      console.error("Error fetching names:", error.message);
      return [];
  }
}


async function pingWhenLive(client, channel) {
    client.on('message', async (channel, tags, message, self) => {
        if (self) return;

        const isStreamElements = tags.username.toLowerCase() === 'streamelements';

        const caughtMatch = message.match(/flamingo_lindo is now live! (\w+)/);
        if (isStreamElements && caughtMatch){
          const caughtMessage = caughtMatch[1];
          try {
            const names = await getNames();
            console.log("Names:", names); 
            client.say(channel, names.join(" "));
        } catch (error) {
            console.error("Error in Tomfoolery command:", error.message);
        }
        }
        
    });
}

module.exports = {
  pingWhenLive,
};
