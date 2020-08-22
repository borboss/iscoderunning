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
// => "I have allowed your code to continue!"
// whatever
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
Please contact me on discord if there are any urgent bugs.

[![Follow me on GitHub](https://img.shields.io/github/followers/bobbaross?style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross)
[![Star on GitHub](https://img.shields.io/github/stars/bobbaross/iscoderunning?style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross/iscoderunning)
[![Fork on GitHub](https://img.shields.io/github/forks/bobbaross/iscoderunning?style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross/iscoderunning/fork)
[![Watch on GitHub](https://img.shields.io/github/watchers/bobbaross/iscoderunning?label=Watch&style=for-the-badge&logo=Github&color=181717)](https://github.com/bobbaross/iscoderunning/subscription)


[![Follow on Twitter](https://img.shields.io/twitter/follow/CoolKidMalachi?label=Follow&style=for-the-badge&logo=Twitter&color=1DA1F2)](https://twitter.com/intent/follow?screen_name=CoolKidMalachi)
[![Join the Discord](https://img.shields.io/badge/Discord-7289DA?label=Chat&style=for-the-badge&logo=Discord&color=7289DA)](https://minecraft.sexy/crucify)
[![NPM Package](https://img.shields.io/badge/Node-CB3837?label=Get%20The%20Package&style=for-the-badge&logo=NPM&color=CB3837)](https://www.npmjs.com/package/is-code-running)
[![Youtube](https://img.shields.io/badge/Youtube-FF0000?label=Subscribe&style=for-the-badge&logo=Youtube&color=FF0000)](https://youtube.com/c/perfectibility)
