//Task1: judge whether the following two variables are array or not.
const A = '[1,2,3,4]',
  B = [1, 2, 3, 4];

function isArray(obj) {
  return obj instanceof Array;
}
console.log(isArray(A));
console.log(isArray(B));
//Task2: multiply every item in the following array by 2.
const C = [1, 2, 3, 4, 5];

function multiplyByTwo(array) {
  return array.map(function(item, index, array) {
    return (item * 2);
  })
}

console.log(multiplyByTwo(C));