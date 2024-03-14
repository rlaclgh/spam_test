const axios = require("axios");
const cheerio = require("cheerio");

const getRedirectDomainByContent = async (rawUrl) => {
  const response = await axios(rawUrl);

  const $ = cheerio.load(response.data);
  const aTags = $("a");

  const domainSet = new Set();

  aTags.each((i, element) => {
    const href = $(element).attr("href");
    domainSet.add(href);
  });

  domainSet.delete(null);

  return domainSet;
};

module.exports = getRedirectDomainByContent;
