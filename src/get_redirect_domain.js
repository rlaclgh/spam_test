const axios = require("axios");
const extractDomain = require("./extract_domain");

const getRedirectDomain = async (rawUrl) => {
  const response = await axios(rawUrl);

  // const domain = extractDomain(response.request.res.responseUrl);
  return response.request.res.responseUrl;
};

module.exports = getRedirectDomain;
