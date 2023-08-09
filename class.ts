// // class User {
// //     public email: string
// //     private name: string
// //     readonly city: string = "Jaipur"
// //     constructor(email: string, name: string) {
// //         this.email = email;
// //         this.name
// //     }
// // }

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
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    getReelTime(): number {
        // after some calculation
        return 5
    }
}

// const lucky = new TakePhoto("test", "Test")


class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}

const ali = new Instagram("test", "Test", 3)
ali.getReelTime()


export { }