const puppeteer = require('puppeteer');
const { createPage } = require("./workFlow/createPage");
const { insertValuesToForm } = require("./uiActions/uiActions");

insertValuesToForm();

