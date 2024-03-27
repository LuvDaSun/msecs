import * as assert from "node:assert/strict";
import test from "node:test";
import { day, week } from "./msecs.js";

test("date time math", () => {
  const now = new Date("2023-04-21T08:14:25Z").valueOf();

  const tomorrow = now + day;
  assert.equal(new Date(tomorrow).toISOString(), new Date("2023-04-22T08:14:25Z").toISOString());

  const inTwoWeeks = now + 2 * week;
  assert.equal(new Date(inTwoWeeks).toISOString(), new Date("2023-05-05T08:14:25Z").toISOString());

  /*
    This is the UTC midnight, not the local!
    */
  const utcMidnight = now - (now % day) + 1 * day;
  assert.equal(new Date(utcMidnight).toISOString(), new Date("2023-04-22T00:00:00Z").toISOString());
});
