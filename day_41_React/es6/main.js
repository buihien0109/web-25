// import {logName, name} from './fn.js';
import * as fn from './fn.js';
import User from "./user.js";

// fn.logName("Nguyễn Văn A");
// console.log(fn.name);

// logName("Nguyễn Văn A");
// console.log(name);

let user1 = new User("Bùi Hiên", "hien@techmaster.vn");
console.log(user1);
user1.sayHi();

console.log(user1.name);
