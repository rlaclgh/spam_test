const extractUrls = require("../src/extract_urls");

test("spam spam https://www.naver.com https://www.naver.com -> [https://www.naver.com, https://www.naver.com]", async () => {
  const content = "spam spam https://www.naver.com https://www.naver.com";

  const result = await extractUrls(content);
  expect(result[0]).toBe("https://www.naver.com");
  expect(result[1]).toBe("https://www.naver.com");
});
