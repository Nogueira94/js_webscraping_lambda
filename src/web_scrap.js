const puppeteer = require('puppeteer');

const country = 'brazil';

// let scrape_global = async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://worldometers.info/coronavirus/');

//     const totalwcases = await page.evaluate (() => {
//         const wcases = []
//         document.querySelectorAll("#maincounter-wrap > div > span").forEach(number => wcases.push(number.innerText))

//         return wcases;
//     })

//     browser.close();
//     return totalwcases;   

// };

let scrape_country = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://worldometers.info/coronavirus/country/${country}/`);

    const totalbrcases = await page.evaluate (() => {
        const brcases = []
        document.querySelectorAll("#maincounter-wrap > div > span").forEach(number => brcases.push(number.innerText))

        return brcases;
    })

    browser.close();
    return totalbrcases;   

};

/*scrape_global().then((value)=>{
    console.log(value)
})

scrape_country().then((value)=>{
    console.log(value)
})*/

// module.exports = scrape_global;
module.exports = scrape_country;
