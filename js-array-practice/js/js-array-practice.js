const A = '[1,2,3,4]', B = [1,2,3,4];

function isArray(obj) {
    return obj instanceof Array;
}

console.log(isArray(A));
console.log(isArray(B));
