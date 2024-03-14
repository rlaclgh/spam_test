const getRedirectDomain = require("../src/get_redirect_domain");

test("http://bitly.com/3eZyxM1 -> https://www.google.com/", async () => {
  const url = "http://bitly.com/3eZyxM1";
  const redirectDomain = "https://www.google.com/";

  const result = await getRedirectDomain(url);
  expect(result).toBe(redirectDomain);
});

test("https://google.com/ -> https://www.google.com/", async () => {
  const url = "https://google.com/";
  const redirectDomain = "https://www.google.com/";

  const result = await getRedirectDomain(url);
  expect(result).toBe(redirectDomain);
});
