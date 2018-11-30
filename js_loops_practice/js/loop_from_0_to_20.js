function isOdd(n) {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function showResult() {
  for (let i = 1; i <= 20; i++) {
    if (isOdd(i)) {
      console.log(`${i}是奇数。`);
    } else {
      console.log(`${i}是偶数。`);
    }
  }
}

showResult();