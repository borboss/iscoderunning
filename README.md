is-code-running
----------
Required to check if your code is running/working. Useful to also crash your process.

Installing/Requiring
--------------------
```
npm install iscoderunning
```
Then, inside of your code requiring it is as simple as any other package.
```
const coderun = require("iscoderunning");
```
or
```
import const coderun = require("iscoderunning");
 from "iscoderunning";
```
 
Usage/Examples
-----
Is the code is running?
```
const coderun = require("iscoderunning");
coderun.codeRunning
```
Stop your code easily:
```
const coderun = require("iscoderunning");
// whatever
coderun.stopCode()
// => "I have stopped your code!"
```
Let your code run:
```
const coderun = require("iscoderunning");
coderun.startCode()
// => "Your code has started!"
// whatever
``` 
Pause and unpause your code:
```
const coderun = require("iscoderunning");
// whatever
coderun.pauseCode()
// => "I paused your code, auto continuing now...!"
// whatever
coderun.continueCode()
// => "Code continuing!"
```
Start the code and then end it:
```
const coderun = require("iscoderunning");
coderun.startCode()
// => "I have allowed your code to continue!"
// whatever
coderun.stopCode()
// => "I have stopped your code!"
// => Ends the process
```
Log your stuff in console:
```
const coderun = require("iscoderunning");
let log = "this is a log!"
coderun.log(log)
// => "this is a log!"
```
Contact
----------
This project is no longer being actively maintained. Please fork/recreate this project if you need it.
