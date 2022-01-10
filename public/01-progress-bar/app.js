// const progress = document.querySelector(".progress-done");

// progress.style.opacity = 1;
// progress.style.width = progress.getAttribute('data-done') + '%';

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var progress = document.querySelector(".progress-done");
    var width = 0;
    var id = setInterval(frame, 20);

    function frame() {
      if (width >= 70) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progress.style.width = width + '%';
        progress.style.opacity = 1;
        progress.innerHTML = width + '%'
      }
    }
  }
}