(function(){
    console.log("Funcao IIFE - Funcao auto-executavel")
    console.log("Deve ser executado no inicio do arquivo")
}());

function is(obj) {
    return Object.prototype.toString.call(obj);
}

function isNumber(obj) {
    return is(obj) === "[object Number]";
}

function isString(obj) {
    return is(obj) === "[object String]";
}

function isArray(obj) {
    return is(obj) === "[object Array]";
}

function isObject(obj) {
    return is(obj) === "[object Object]";
}

function isBoolen(obj) {
    return is(obj) === "[object Boolean]";
}

function isFunc(obj) {
    return is(obj) === "[object Function]";
}

console.log(isFunc("function(){}"))

var arr1 = [1, 2, 3];

var arr2 = copyArray(arr1);

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log(arr2 === arr1);

function copyArray(arr){
    return Array.prototype.slice.call(arr);
}

const myPackage = ['cheese', 'eggs', 'milk', 'bread'];
console.log(...myPackage);

printPackageContents('cheese', 'eggs', 'milk', 'bread');

function printPackageContents(...items) {
    for (const item of items){
        console.log(item);
    }
}