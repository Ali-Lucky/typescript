var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>()
function getSearchProduct(products) {
    var index = 3;
    return products[index];
}
var getMoreSearchProducts = function (products) {
    var index = 4;
    return products[index];
};
function anotherFunction(valOne, valTwo) {
    return { valOne: valOne, valTwo: valTwo };
}
anotherFunction(3, { connection: "db", username: "Lucky", "password": "1234" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
