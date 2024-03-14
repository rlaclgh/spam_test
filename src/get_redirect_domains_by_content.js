const axios = require("axios");
const cheerio = require("cheerio");
const extractDomain = require("./extract_domain");

const getRedirectDomainByContent = async (rawUrl) => {
  const response = await axios(rawUrl);

  const $ = cheerio.load(response.data);
  const aTags = $("a");

  const domainSet = new Set();

  aTags.each((i, element) => {
    const href = $(element).attr("href");
    const domain = extractDomain(href);
    domainSet.add(domain);
  });

  domainSet.delete(null);

  return domainSet;
};

module.exports = getRedirectDomainByContent;
