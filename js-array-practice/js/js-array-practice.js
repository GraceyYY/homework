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
//Task3: join the items of the array with "," , "+" and space.
const COLORS = ["Red", "Green", "White", "Black"];

function joinTheArray() {
  console.log(COLORS.join(" "));
  console.log(COLORS.join("+"));
  console.log(COLORS.join(","));
}
joinTheArray();
//Task4: sort the array by number in descending order.
const D = [5, 1, 8, 10, 4];

function compare(val1, val2) {
  if (val1 < val2) {
    return 1;
  } else if (val1 > val2) {
    return -1;
  } else {
    return 0;
  }
}
console.log(D.sort(compare));