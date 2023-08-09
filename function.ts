function addTwo(num: number): number {
    return num + 2
    // return "Hello"
}

function getUpper(str: string) {
    return str.toUpperCase()
}

function signUpUser(name: string, email: string, isVerified: boolean) {}

let logInUser = (name: string, email: string, isVerified: boolean = false) => {}

const heroes = ["thor", "ironman", "spiderman"]

heroes.map((hero): string => {
    return `${hero} is my favourite hero`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
    // return 1
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
    // return 1
}

addTwo(5)
getUpper("lucky")
signUpUser("Lucky", "lucky@gmail.com", true)
logInUser("Lucky", "lucky@gmail.com")


export {}