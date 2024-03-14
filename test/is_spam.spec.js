const isSpam = require("../src/is_spam");
test("init test", async () => {
  const result1 = await isSpam(
    "spam spam https://moiming.page.link/exam?_imcp=1",
    ["docs.github.com"],
    1
  );

  const result2 = await isSpam(
    "spam spam https://moiming.page.link/exam?_imcp=1",
    ["moiming.page.link"],
    1
  );
  expect(result1).toBe(false);
  expect(result2).toBe(true);
});
