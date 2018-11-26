//Task1: judge whether the following two variables are array or not.
const TO_BE_TEST_A = '[1,2,3,4]',
  TO_BE_TEST_B = [1, 2, 3, 4];

function isArray(obj) {
  return obj instanceof Array;
}
console.log(isArray(TO_BE_TEST_A));
console.log(isArray(TO_BE_TEST_B));
//Task2: multiply every item in the following array by 2.
const TO_BE_MULTIPLIED = [1, 2, 3, 4, 5];

function multiplyByTwo(array) {
  return array.map(function(item, index, array) {
    return (item * 2);
  })
}
console.log(multiplyByTwo(TO_BE_MULTIPLIED));
//Task3: join the items of the array with "," , "+" and space.
const COLORS = ["Red", "Green", "White", "Black"];

function joinTheArray() {
  console.log(COLORS.join(" "));
  console.log(COLORS.join("+"));
  console.log(COLORS.join(","));
}
joinTheArray();
//Task4: sort the array by number in descending order.
const TO_BE_SORTED = [5, 1, 8, 10, 4];

function compare(val1, val2) {
  if (val1 < val2) {
    return 1;
  } else if (val1 > val2) {
    return -1;
  } else {
    return 0;
  }
}
console.log(TO_BE_SORTED.sort(compare));
//Task5: find the item that appears most in the array.
const CONTENT = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findAppearsTheMost()