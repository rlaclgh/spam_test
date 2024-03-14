const isSpam = require("../src/is_spam");
test("init test", () => {
  expect(isSpam()).toBe(false);
});
