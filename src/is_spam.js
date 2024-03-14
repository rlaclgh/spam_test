const extractUrls = require("./extract_urls");
const getRedirectDomain = require("./get_redirect_domain");
const getRedirectDomainByContent = require("./get_redirect_domains_by_content");
const extractDomain = require("./extract_domain");

const isSpam = async (content, spamLinkDomains, redirectionDepth) => {
  const checked = {};
  const urls = extractUrls(content);
  if (urls.length === 0) return true;
  if (spamLinkDomains.length === 0) return true;

  const promises = [];

  for (const url of urls) {
    const promise = isSpamRecursive(
      0,
      url,
      spamLinkDomains,
      redirectionDepth,
      checked
    );
    promises.push(promise);
  }

  const result = await Promise.all(promises).then((results) => {
    return results.some((val) => val == true);
  });
  return result;
};

const isSpamRecursive = async (
  depth,
  url,
  spamLinkDomains,
  redirectionDepth,
  checked
) => {
  if (depth > redirectionDepth) {
    return false;
  }

  let allUrls = [];

  if (url in checked) {
    allUrls = checked[url];
  } else {
    const redirectDomain = await getRedirectDomain(url);
    const domainSet = await getRedirectDomainByContent(url);
    domainSet.add(redirectDomain);
    allUrls = Array.from(domainSet);
  }

  for (const domain of allUrls) {
    if (spamLinkDomains.includes(extractDomain(domain))) {
      return true;
    }
  }

  for (const domain of domainSet) {
    isSpamRecursive(
      depth + 1,
      domain,
      spamLinkDomains,
      redirectionDepth,
      checked
    );
  }
};

module.exports = isSpam;
