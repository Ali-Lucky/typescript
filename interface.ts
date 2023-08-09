interface User {
    readonly _id: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

const lucky: User = { _id: 1, email: "lucky@gmail.com", userId: 123, startTrial: () => {
    return "trial started"
},
getCoupon: (name: "FIRST50", off: 10) => {
    return 10
},
phone: 123456 }
lucky.email = "ali@gmail.com"
// lucky._id = 2

interface User {
    phone: number
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const ali: Admin = { _id: 1, email: "lucky@gmail.com", userId: 123, startTrial: () => {
    return "trial started"
},
getCoupon: (name: "FIRST50", off: 10) => {
    return 10
},
phone: 123456,
role: "admin" }


export {}