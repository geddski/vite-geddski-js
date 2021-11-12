import { test } from "uvu";
import * as assert from 'uvu/assert';

test("test", () => {
  assert.is(true, true);
});

test.run();