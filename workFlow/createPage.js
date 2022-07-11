const puppeteer = require('puppeteer');

const createPage = async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 350, });
    const page = await browser.newPage();
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
    return { page, browser };
};

module.exports = createPage;


