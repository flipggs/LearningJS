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