const mockNav = (x) => {
  const content = document.createElement('section');
  for (let i = 0; i < 3; i += 1) {
    const counter = document.createElement('div');
    counter.classList.add('card-counter');
    document.body.appendChild(counter);
  }
  for (let i = 0; i < x; i += 1) {
    const child = document.createElement('div');
    child.classList.add('show');
    child.innerHTML = '<div><ul class="card"></li></div>';
    content.appendChild(child);
  }
  document.body.appendChild(content);
};

export default mockNav;
