const extractDomain = require("../src/extract_domain");

test("https://www.naver.com/ -> www.naver.com", async () => {
  const url = "https://www.naver.com/";
  const domain = "www.naver.com";

  const result = await extractDomain(url);
  expect(result).toBe(domain);
});
