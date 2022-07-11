const {
    SELECT_EMPLOYEES,
    BTN_SUBMIT,
} = require("../pageObjects/pageObjects");


const editFields = async (page) => await page.evaluate(() => {
    const inputsFields = document.querySelectorAll(".input");
    const myDetails = ["Lior solomon", "liorlsa9@gmail.com", "0549303109", "Jones"]
    inputsFields.forEach((element, index) => element.value = myDetails[index]);
});

const selectFromOptions = async (page) => await page.select(SELECT_EMPLOYEES, "51-500");
const screenshotPage = async (page) => await page.screenshot({ path: 'example.png' });
const submitForm = async (page) => await page.click(BTN_SUBMIT);



module.exports = {
    selectFromOptions,
    screenshotPage,
    submitForm,
    editFields,
}





