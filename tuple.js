"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number)[] = [1, "2"]
var user = ["1", 2, true];
// user[0] = 3
user[0] = "3";
// user = [1, "2", false]
// user = ["1", 2]
// user = ["1", 2, true, 2]
user.push(true);
