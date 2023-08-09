"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "33";
var lucky = {
    name: "Lucky",
    id: 123
};
lucky = {
    username: "Ali",
    id: 123
};
function getId(id) {
    console.log("id is ".concat(id));
    // id.toLowerCase()
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getId(5);
getId("5");
// getId(true)
// const data1: number[] = [1, 2, 3, "4"]
var data1 = [1, 2, 3, 4];
// const data2: string[] = ["1","2",3]
var data2 = ["1", "2", "3"];
var data3 = [1, 2, 3, 4, "5"];
var pi = 3.14;
// pi = 3.142
var gender;
gender = "male";
