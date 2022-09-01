const content = document.querySelector('body');

const header = `
<header>
<ul class="nav">
  <li class="nav-item">
    <img src="" class="logo" alt="main logo" />
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Shows <span class="card-counter">X</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Actors <span class="card-counter">X</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Actresses <span class="card-counter">X</span></a>
  </li>
</ul>
</header>
`;

const footer = `
<footer>
<p>
Created by Lucas Comamala and Carlos Molina under CC license
</footer>
`;

const render = () => {
  content.insertAdjacentHTML('afterbegin', header);
  content.insertAdjacentHTML('beforeend', footer);
};

const listeners = () => {
  const showsSection = document.getElementById('shows');
  const actorsSection = document.getElementById('actors');
  const actorasSection = document.getElementById('actoras');
  const navLinks = document.querySelectorAll('.nav-link');
  const counters = document.querySelectorAll('.card-counter');

  navLinks[0].addEventListener('click', (e) => {
    showsSection.style.display = 'grid';
    actorsSection.style.display = 'none';
    actorasSection.style.display = 'none';
    counters[0].style.display = 'inline';
    counters[1].style.display = 'none';
    counters[2].style.display = 'none';
  });

  navLinks[1].addEventListener('click', (e) => {
    showsSection.style.display = 'none';
    actorsSection.style.display = 'grid';
    actorasSection.style.display = 'none';
    counters[0].style.display = 'none';
    counters[1].style.display = 'inline';
    counters[2].style.display = 'none';
  });

  navLinks[2].addEventListener('click', (e) => {
    showsSection.style.display = 'none';
    actorsSection.style.display = 'none';
    actorasSection.style.display = 'grid';
    counters[0].style.display = 'none';
    counters[1].style.display = 'none';
    counters[2].style.display = 'inline';
  });
};

const renderNav = () => {
  render();
  listeners();
};

export default renderNav;
