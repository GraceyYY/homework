function objectPractice() {
  let user = {};
  user.name = 'John';
  user.surname = 'Mike';
  user.name = 'Peter';
  delete user.name;
}
objectPractice();
let fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
fruit.countFruit = function() {
  let result = 0;
  for (let prop in fruit) {
    if (typeof fruit[prop] === 'number') {
      result += fruit[prop];
    }
  }
  return result;
}
fruit.countFruit();