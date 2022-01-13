const circle = document.querySelectorAll('.circle');
let activeLights = 0;

setInterval(changeLight, 1000);

function changeLight() {
  circle[activeLights].className = 'circle';
  activeLights++

  if (activeLights > 2) {
    activeLights = 0;
  }

  const currentLight = circle[activeLights];
  currentLight.classList.add(currentLight.getAttribute('color'));
}