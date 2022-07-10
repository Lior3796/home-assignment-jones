const puppeteer = require('puppeteer');

const header_country = async(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
    const getHeader = await page.evaluate(() => document.querySelector(".large-7.medium-7.columns div h1").innerText);
    await browser.close();
    return getHeader;
})();



module.exports = {
    header_country
}

//primary button




