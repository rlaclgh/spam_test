const getRedirectDomainByContent = require("../src/get_redirect_domains_by_content");

test("https://www.naver.com/ -> set", async () => {
  const url = "https://www.naver.com/";

  const domainSet = await getRedirectDomainByContent(url);

  expect(domainSet.size).toBeGreaterThan(1);
});
