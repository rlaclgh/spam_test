const getRedirectDomainByContent = require("../src/get_redirect_domains_by_content");

test("[한시적 테스트]  https://www.naver.com/ -> { 'help.naver.com', 'nid.naver.com' }", async () => {
  const url = "https://www.naver.com/";

  const domainSet = await getRedirectDomainByContent(url);

  expect(domainSet.has("help.naver.com")).toBe(true);
  expect(domainSet.has("nid.naver.com")).toBe(true);
});
