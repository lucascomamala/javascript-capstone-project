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

const renderNav = () => {
  content.insertAdjacentHTML('afterbegin', header);
  content.insertAdjacentHTML('beforeend', footer);
};

export default renderNav;
