"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello"
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUpUser(name, email, isVerified) { }
var logInUser = function (name, email, isVerified) {
    if (isVerified === void 0) { isVerified = false; }
};
var heroes = ["thor", "ironman", "spiderman"];
heroes.map(function (hero) {
    return "".concat(hero, " is my favourite hero");
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1
}
function handleError(errmsg) {
    throw new Error(errmsg);
    // return 1
}
addTwo(5);
getUpper("lucky");
signUpUser("Lucky", "lucky@gmail.com", true);
logInUser("Lucky", "lucky@gmail.com");
