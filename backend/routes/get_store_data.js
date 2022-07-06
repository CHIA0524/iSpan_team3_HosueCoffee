const express = require('express');
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const router = express.Router();
const fs = require("fs");

const url = "https://www.starbucks.com.tw/stores/storesearch.jspx#store_div_178";
headers = {
    "Referer": "https://www.starbucks.com.tw/stores/storesearch.jspx#store_div_178",
}
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    console.log(data);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in store_list class
    const listItems = $(".store_list li");
    // Stores data for all countries
    const allStore = [];
    // Use .each method to loop through the li we selected
    listItems.each((idx, el) => {
      // Object holding data for each country/jurisdiction
      const store = { name: "", address: "" };
      // Select the text content of a and span elements
      // Store the textcontent in the above object
      store.name = $(el).children("div").children("h4").text();
      store.address = $(el).children("div").children("p").text();
      // Populate countries array with country data
      allStore.push(store);
    });
    // Logs countries array to the console
    console.dir(allStore);
    // Write countries array in countries.json file
    fs.writeFile("allStore.json", JSON.stringify(allStore, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully written data to file");
    });
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
// scrapeData();

router.get("/api/crypto", async (req, res) => {
    try {
      const scrapeData = await scrapeData();
      return res.status(200).json({
        result: scrapeData,
      });
    } catch (err) {
      return res.status(500).json({
        err: err.toString(),
      });
    }
  });

  module.exports = router;

