const content = document.querySelector('main');

const showsSection = (shows) => {
  const section = document.createElement('section');
  section.id = 'shows';
  for (let i = 0; i < shows.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('show-card');
    card.innerHTML = `<img class="card-img" src="${shows[i].image.medium}" alt="${shows[i].name} poster image">
        <div class="card-title">
          <h3>${shows[i].name}</h3>
          <div class="likes-container">
            <i class="fa-regular fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button id="${shows[i].id}" class="modal-btn shows-modal" onClick="">Comments</button>`;
    section.appendChild(card);
  }
  return section.outerHTML;
};

const actorsSection = (actors) => {
  const section = document.createElement('section');
  section.id = 'actors';
  for (let i = 0; i < actors.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('actor-card');
    card.innerHTML = `<img class="card-img" src="${actors[i].image.medium}" alt="${actors[i].name} poster image">
        <div class="card-title">
          <h3>${actors[i].name}</h3>
          <div class="likes-container">
            <i class="fa-regular fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button id="${actors[i].id}" class="modal-btn actors-modal">Comments</button>`;
    section.appendChild(card);
  }
  return section.outerHTML;
};

const actorasSection = (actoras) => {
  const section = document.createElement('section');
  section.id = 'actoras';
  for (let i = 0; i < actoras.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('actora-card');
    card.innerHTML = `<img class="card-img" src="${actoras[i].image.medium}" alt="${actoras[i].name} poster image">
        <div class="card-title">
          <h3>${actoras[i].name}</h3>
          <div class="likes-container">
            <i class="fa-regular fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button id="${actoras[i].id}" class="modal-btn actoras-modal" onClick="">Comments</button>`;
    section.appendChild(card);
  }
  return section.outerHTML;
};

const heartsListeners = () => {
  const hearts = document.querySelectorAll('.fa-heart');
  hearts.forEach((heart) => {
    heart.addEventListener('mouseover', () => {
      heart.classList.remove('fa-regular');
      heart.classList.add('fa-solid');
    });
  });
  hearts.forEach((heart) => {
    heart.addEventListener('mouseout', () => {
      heart.classList.add('fa-regular');
      heart.classList.remove('fa-solid');
    });
  });
};

const createPopup = (id, array, persona) => {
  console.log(id, array, persona);
};

const modalListeners = (shows, actors, actoras) => {
  const modalBtns = document.querySelectorAll('.modal-btn');
  modalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('shows-modal')) {
        createPopup(e.target.id, shows, false);
      } else if (e.target.classList.contains('actors-modal')) {
        createPopup(e.target.id, actors, true);
      } else if (e.target.classList.contains('actoras-modal')) {
        createPopup(e.target.id, actoras, true);
      }
    });
  });
};

const renderHome = (shows, actors, actoras) => {
  content.insertAdjacentHTML('beforeend', showsSection(shows));
  content.insertAdjacentHTML('beforeend', actorsSection(actors));
  content.insertAdjacentHTML('beforeend', actorasSection(actoras));
  heartsListeners();
  modalListeners(shows, actors, actoras);
};

export default renderHome;
