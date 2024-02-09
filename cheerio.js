// import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio"
const cheerio = require('langchain/document_loaders/web/cheerio')


async function fetchAndLoad(url) {
    const loader = new cheerio.CheerioWebBaseLoader(
        url,
        {
            selector: ".wixui-rich-text__text"
        }
    )
    const docs = await loader.load()

    const text = docs[0].pageContent.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\.(?=[a-zA-Z])/g, '. ');

    const response = await fetch("http://localhost:3000/api/retrieval/ingest", {
        method: "POST",
        body: JSON.stringify({
            text,
        })
    });
}

const urls = [
"https://www.younner.com/",
"https://www.younner.com/yo-yes",
"https://www.younner.com/yo-ops",
"https://www.younner.com/yo-stack",
"https://www.younner.com/cases",
"https://www.younner.com/servi%C3%A7os",
"https://www.younner.com/sobre-a-younner",
// "https://www.younner.com/insights",
// "https://www.younner.com/contato",
]

urls.forEach(url => fetchAndLoad(url))

process.exit(); 