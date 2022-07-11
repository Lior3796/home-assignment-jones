// Create page function use the puppeteer libary to open browser and create page. 
const createPage = require("../workFlow/createPage");
const {
    TEXT_THANKYOU,
    FORM_SERVICE,
} = require("../pageObjects/pageObjects");
const {
    editFields,
    selectFromOptions,
    screenshotPage,
    submitForm,

} = require("../uiActions/uiActions");


const submitFormWorkflow = async () => {
    const { page, browser } = await createPage();

    await page.waitForSelector(FORM_SERVICE);
    await editFields(page);
    await selectFromOptions(page);
    await screenshotPage(page);
    await submitForm(page);
    await page.waitForSelector(TEXT_THANKYOU);

    console.log("In the 'Thank-you' page");

    await browser.close();
};

module.exports = submitFormWorkflow;