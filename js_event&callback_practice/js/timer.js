let interval;

function timer() {
  let seconds = 0;
  interval = setInterval(function() {
    seconds += 1;
    show(seconds);
  }, 1000);
}
function show(seconds) {
  document.getElementById("result").innerHTML = seconds;
}

function start() {
  show(0);
  timer();
}

function stop() {
  clearInterval(interval);
}