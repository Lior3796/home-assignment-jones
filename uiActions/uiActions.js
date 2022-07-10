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

const insertValuesToForm = async () => {
    const { page, browser } = await createPage();
    await page.waitForSelector("input[name='name']");

    await editFields(page);
    await selectFromOptions(page);
    await screenshotPage(page);
    await submitForm(page);

    await page.waitForSelector(".bg-wrapper.thank-you");
    console.log("In the 'Thank-you' page");
    await browser.close();
};



const editFields = async (page) => await page.evaluate(() => {
    const nameInput = document.querySelectorAll("input");
    const myDetails = ["Lior solomon", "liorlsa9@gmail.com", "0549303109", "Jones"]
    nameInput.forEach((element, index) => element.value = myDetails[index]);
});
const selectFromOptions = async (page) => await page.select("select#employees", "51-500");
const screenshotPage = async (page) => await page.screenshot({ path: 'example.png' });
const submitForm = async (page) => await page.click("button.primary.button");



module.exports = {
    insertValuesToForm
}

//primary button




