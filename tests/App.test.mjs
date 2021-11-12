import { test } from "uvu";
import * as assert from 'uvu/assert';

test.before(() => {
  // runs before all tests
});

test.before.each(() => {
  // runs before each test
})

test.after(() => {
  // runs after all the tests
});

test("test", () => {
  assert.is(true, true);
});

test.run();