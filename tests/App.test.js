const { test } = require("uvu");
const assert = require("uvu/assert");

test("test", () => {
  assert.is(true, true);
});

test.run();