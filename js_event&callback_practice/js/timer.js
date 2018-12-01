let interval;

function timer() {
  let seconds = 0;
  interval = setInterval(function() {
    seconds += 1;
    show(seconds);
  }, 1000);
}
