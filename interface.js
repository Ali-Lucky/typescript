"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lucky = { _id: 1, email: "lucky@gmail.com", userId: 123, startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
    phone: 123456 };
lucky.email = "ali@gmail.com";
var ali = { _id: 1, email: "lucky@gmail.com", userId: 123, startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
    phone: 123456,
    role: "admin" };
