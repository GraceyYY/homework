function reverseString(message) {
  return message.split('').reverse().join('');
}
console.log(reverseString('hello'));

function palindrome(message) {
  return message === reverseString(message);
}
console.log(palindrome('hello'));
console.log(palindrome('abcba'));

function alphabetSort(message) {
  return message.split('').sort().join('');
}
console.log(alphabetSort('hello'));