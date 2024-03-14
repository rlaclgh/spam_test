const url = require("url");

const extractDomain = (rawUrl) => {
  try {
    const domain = url.parse(rawUrl, {}).hostname;
    return domain;
  } catch (error) {}
};

module.exports = extractDomain;
