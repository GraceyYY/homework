(function() {
    let ul = document.getElementById("no");
    ul.addEventListener('click', function(e) {
      alert(e.target.innerHTML);
    })();