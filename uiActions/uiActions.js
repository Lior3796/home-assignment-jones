const puppeteer = require('puppeteer');
const {
    HEADER_COUNTRY,
    HEADER_COUNTRY_DESC,
    SUBHEADER_PANEL,
    PARAGRAPH_PANEL,
    INPUT_NAME,
    INPUT_EMAIL,
    INPUT_PHONE,
    INPUT_COMPANY
} = require("../pageObjects/pageObjects");

const { createPage } = require("../workFlow/createPage");

const getCountryHeader = async () => {
    const { page, browser } = await createPage();
    const getHeader = await page.evaluate(() => document.querySelector(".large-7.medium-7.columns div h1").innerText);
    console.log(getHeader);
    await browser.close();
};

const getHeaderCountry = async () => {
    const { page, browser } = await createPage();
    const getHeader = await page.evaluate(() => document.querySelector(".large-7.medium-7.columns div h1").innerText);
    console.log(getHeader);
    await browser.close();
};

const getDescCountry = async () => {
    const { page, browser } = await createPage();
    const getDesc = await page.evaluate(() => document.querySelector(".large-7.medium-7.columns div h4").innerText);
    console.log(getDesc);
    await browser.close();
};

const insertValueToForm = async () => {
    const { page, browser } = await createPage();
    await page.waitForSelector("input[name='name']");

    const editFields = await page.evaluate(() => {
        const nameInput = document.querySelectorAll("input");
        const myDetails = ["Lior solomon", "liorlsa9@gmail.com", "0549303109", "Jones"]
        nameInput.forEach((element, index) => element.value = myDetails[index]);
    });
    await browser.close();
};


module.exports = {
    getCountryHeader,
    getDescCountry,
    insertValueToForm
}

//primary button




