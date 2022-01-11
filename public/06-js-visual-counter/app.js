const counters = document.querySelectorAll('.counters');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = Math.floor(target / 1000);
    if (c < target) {
      counter.innerText = c + increment;
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target;
    }
  }
  updateCounter();
});