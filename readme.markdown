# millisecond intervals

This "library" provides the following constants:
 - millisecond = 1;
 - second = 1000 * millisecond;
 - minute = 60 * second;
 - hour = 60 * minute;
 - day = 24 * hour;
 - week = 7 * day;

So you can do things like
```javascript
import {day, week} from "msecs";

const now = new Date();
const tomorrow = new Date(now + day);
const midnight = new Date(Math.floor(now / day) + 1 * day);
const inTwoWeeks = new Date(now + 2 * week);
```