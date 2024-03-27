# millisecond intervals

This "library" provides the following constants:

- millisecond = 1;
- second = 1000 \* millisecond;
- minute = 60 \* second;
- hour = 60 \* minute;
- day = 24 \* hour;
- week = 7 \* day;

So you can do easy to read math on your dates!

```javascript
import { day, week } from "msecs";

const now = new Date();
const tomorrow = new Date(now + day);
const inTwoWeeks = new Date(now + 2 * week);
const midnight = new Date(now - (now % day) + 1 * day);
```
