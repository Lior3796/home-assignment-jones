// The variables below are page object but don't works properly

const {
    SELECT_EMPLOYEES,
    BTN_SUBMIT,
    TEXT_THANKYOU,
    FORM_SERVICE,
} = require("../pageObjects/pageObjects");

// Create page function use the puppeteer libary to open browser and create page 

const { createPage } = require("../workFlow/createPage");

const insertValuesToForm = async () => {
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



const editFields = async (page) => await page.evaluate(() => {
    const inputsFields = document.querySelectorAll(".input");
    const myDetails = ["Lior solomon", "liorlsa9@gmail.com", "0549303109", "Jones"]
    inputsFields.forEach((element, index) => element.value = myDetails[index]);
});

const selectFromOptions = async (page) => await page.select(SELECT_EMPLOYEES, "51-500");
const screenshotPage = async (page) => await page.screenshot({ path: 'example.png' });
const submitForm = async (page) => await page.click(BTN_SUBMIT);



module.exports = {
    insertValuesToForm
}





