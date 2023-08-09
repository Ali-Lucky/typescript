let score: number | string = 33

score = "33"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let lucky: User | Admin = {
    name: "Lucky",
    id: 123
}

lucky = {
    username: "Ali",
    id: 123
}

function getId(id: number | string) {
    console.log(`id is ${id}`);
    // id.toLowerCase()
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

getId(5)
getId("5")
// getId(true)

// const data1: number[] = [1, 2, 3, "4"]
const data1: number[] = [1, 2, 3, 4]
// const data2: string[] = ["1","2",3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = [1, 2, 3, 4, "5"]

let pi: 3.14 = 3.14
// pi = 3.142

let gender: "male" | "female"
gender = "male"
// gender = "other"

export {}