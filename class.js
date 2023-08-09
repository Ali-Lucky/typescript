"use strict";
// // class User {
// //     public email: string
// //     private name: string
// //     readonly city: string = "Jaipur"
// //     constructor(email: string, name: string) {
// //         this.email = email;
// //         this.name
// //     }
// // }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//     // private _courseCount = 1
//     protected _courseCount = 1
//     readonly city: string = "Jaipur"
//     constructor(
//         public email: string,
//         public name: string,
//         // private userId: string
//     ) { }
//     private deleteToken() {
//         console.log("token deleted");
//     }
//     get getAppleEmail(): string {
//         return `apple${this.email}`
//     }
//     get courseCount(): number {
//         return this._courseCount
//     }
//     set courseCount(courseNum) {
//         if (this.courseCount <= 1) {
//             throw new Error("Course count should be greater than 1")
//         }
//         this._courseCount = courseNum
//     }
// }
// class SubUser extends User {
//     isFamily: boolean = true
//     changeCourseCount() {
//         this._courseCount = 4
//     }
// }
// const lucky = new User("lucky@gmail.com", "Lucky")
// // lucky.name
// // lucky.deleteToken()
// abstract class
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function () {
        // after some calculation
        return 5;
    };
    return TakePhoto;
}());
// const lucky = new TakePhoto("test", "Test")
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    return Instagram;
}(TakePhoto));
var ali = new Instagram("test", "Test", 3);
ali.getReelTime();
