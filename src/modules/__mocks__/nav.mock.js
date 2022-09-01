const mockNav = () => {
  const content = document.createElement('section');
  content.id = 'shows';
  for (let i = 0; i < 9; i += 1) {
    const counter = document.createElement('div');
    counter.classList.add('card-counter');
    document.body.appendChild(counter);
  }

  for (let i = 0; i < 9; i += 1) {
    const child = document.createElement('div');
    child.classList.add('show');
    child.innerHTML =
      '<div>' +
      '  <ul id="list"></li>' +
      '</div>';
    content.appendChild(child);
  }
  document.body.appendChild(content);
}

export default mockNav;
