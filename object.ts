// function createUser({ name: string, isActive: boolean }){}

// // createUser({ name: "Lucky", isActive: true, email: "lucky@gmail.com" })

// let newUser = {
//     name: "Lucky",
//     isActive: true,
//     email: "lucky@gmail.com"
// }

// createUser(newUser)

// function createCourse():{ name: string, price: number }{
//     return { name: "typescript", price: 299 }
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// let user = { name: "", email: "", isActive: true }

// function createUser(user: User): User {
//     return user
// }

// createUser(user)

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "Lucky",
    email: "lucky@gmail.com",
    isActive: true
}

myUser.email = "ali@gmail.com"
// myUser._id = "123"

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCard: cardDetails = {
    cardNumber: "123456",
    cardDate: "01/01/2025",
    cvv: 123
}

export {}