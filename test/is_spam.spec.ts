import isSpam from "../src/is_spam";

test("init test", () => {
  expect(isSpam()).toBe(false);
});
