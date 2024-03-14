const axios = require("axios");
const url = require("url");

const getRedirectDomain = async (rawUrl) => {
  const response = await axios(rawUrl);
  const domain = url.parse(response.request.res.responseUrl, {}).hostname;
  return domain;
};

module.exports = getRedirectDomain;
