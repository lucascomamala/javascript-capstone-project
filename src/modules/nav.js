const content = document.querySelector('body');

const header = `
<header>
<ul class="nav">
  <li class="nav-item">
    <img src="" class="logo" alt="main logo" />
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Shows <span class="card-counter"></span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Actors <span class="card-counter"></span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Actresses <span class="card-counter"></span></a>
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

const getCount = (section) => {
  let content;
  switch (section) {
    case 0:
      content = document.getElementById('shows');
      break;
    case 1:
      content = document.getElementById('actors');
      break;
    case 2:
      content = document.getElementById('actoras');
      break;
    // Default case is for jest testing purposes only
    default:
      content = document.querySelector('section');
  }
  return content.childElementCount;
};

export const displayCount = (section) => {
  const counters = document.querySelectorAll('.card-counter');
  const count = getCount(section);
  switch (section) {
    case 0:
      counters[0].style.display = 'inline';
      counters[1].style.display = 'none';
      counters[2].style.display = 'none';
      break;
    case 1:
      counters[0].style.display = 'none';
      counters[1].style.display = 'inline';
      counters[2].style.display = 'none';
      break;
    case 2:
      counters[0].style.display = 'none';
      counters[1].style.display = 'none';
      counters[2].style.display = 'inline';
      break;
    // Default case is for jest testing purposes only
    default:
      counters[0].innerHTML = `(${count})`;
      return;
  }
  counters[section].innerHTML = `(${count})`;
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
    displayCount(0);
  });

  navLinks[1].addEventListener('click', () => {
    showsSection.style.display = 'none';
    actorsSection.style.display = 'grid';
    actorasSection.style.display = 'none';
    displayCount(1);
  });

  navLinks[2].addEventListener('click', () => {
    showsSection.style.display = 'none';
    actorsSection.style.display = 'none';
    actorasSection.style.display = 'grid';
    displayCount(2);
  });
};

const renderNav = () => {
  render();
  listeners();
  displayCount(0);
};

export default renderNav;
