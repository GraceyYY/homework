let storage = window.localStorage;
window.onload = function() {
  if (!storage.clicks) {
    storage.setItem("clicks", 0);
  }
  showNumber(storage.clicks);
}

function countClicks() {
  addClicksToLocalStorage();
  showNumber(storage.clicks);
}

function showNumber(n) {
  let numDiv = document.getElementById("number");
  numDiv.innerText = n;
}

function addClicksToLocalStorage() {
  let val = Number.parseInt(window.localStorage.clicks);
  val += 1;
  window.localStorage.setItem("clicks", val);
}