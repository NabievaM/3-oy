///<reference path = "Utils.ts" / > -eskirgan usul.
// import { getPass, SECRET } from "./Utils"; -eskirgan usul

import { Utils } from "./Utils.js";
import * as MyUtils from "./Utils.js";

const myPass = Utils.getPass("salim", 31);
console.log(Utils.SECRET);
console.log(myPass);
console.log(MyUtils.Utils);