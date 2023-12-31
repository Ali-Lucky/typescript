const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: number | boolean): number | boolean {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3)

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

// identityFour<Bottle>()

function getSearchProduct<T>(products: T[]): T {
    const index = 3
    return products[index]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    const index = 4
    return products[index]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return { valOne, valTwo }
}

anotherFunction(3, { connection: "db", username: "Lucky", "password": "1234" })

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}