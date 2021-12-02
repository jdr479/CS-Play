const {Builder, By, Key, util} = require('selenium-webdriver');
require('chromedriver');

async function testCreateUser() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://johnathanray.com/cs-play/home_login/");
    await driver.findElement(By.linkText("START")).click();
    await driver.findElement(By.linkText("Join us")).click();
}

testCreateUser();