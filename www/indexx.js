const Request = require("request");
const requestPromise = require("request-promise");
const cheerio = require("cheerio");

(async()=>{


const response = await requestPromise(
    "https://www.solotodo.cl/products/87689-sony-playstation-5-all-digital-glacier-white"
);

const $ =  cheerio.load(response);
const title = $("title").text();

console.log(title);
    
})();