const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.kshs.kh.edu.tw/latestevent/index?Parser=9,3,21';

async function crawl() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        $('a').each((i, el) => {
            const link = $(el).attr('href');
            console.log(`Link ${i + 1}: ${link}`);
        });
    } catch (err) {
        console.error('Error:', err);
    }
}

crawl();