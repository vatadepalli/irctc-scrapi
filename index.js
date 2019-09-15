const puppeteer = require("puppeteer");
const input = require("./input");

(async () => {
  try {
    // Setup
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
    );

    // Page 1 - Input Page
    await input(
      page,
      "MGR CHENNAI CTL - MAS",
      "VIJAYAWADA JN - BZA",
      "30-09-2019"
    );

    console.log("Done");
  } catch (e) {
    console.log("Puppeteer Error: ", e);
  }
})();
