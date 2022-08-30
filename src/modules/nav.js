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
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
};

export const renderNav = () => {
  render();
  listeners();
};

export default renderNav;

