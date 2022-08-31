const content = document.querySelector('body');

const header = `
<header>
<ul class="nav">
  <li class="nav-item">
    <img src="" class="logo" alt="main logo" />
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Shows</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Actors</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Actresses</a>
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

  navLinks[0].addEventListener('click', () => {
    showsSection.style.display = 'grid';
    actorsSection.style.display = 'none';
    actorasSection.style.display = 'none';
  });

  navLinks[1].addEventListener('click', () => {
    showsSection.style.display = 'none';
    actorsSection.style.display = 'grid';
    actorasSection.style.display = 'none';
  });

  navLinks[2].addEventListener('click', () => {
    showsSection.style.display = 'none';
    actorsSection.style.display = 'none';
    actorasSection.style.display = 'grid';
  });
};

export const renderNav = () => {
  render();
  listeners();
};

export default renderNav;
