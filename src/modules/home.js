import makeAPICall from './makeAPICall.js';
import makeAPIPost from './makeAPIPost.js';

const content = document.querySelector('main');

const showsSection = (shows) => {
  const section = document.createElement('section');
  section.id = 'shows';
  for (let i = 0; i < shows.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('actor-card');
    card.innerHTML = `<img class="card-img" src="${shows[i].image.medium}" alt="${shows[i].name} poster image">
        <div class="card-title">
          <h3>${shows[i].name}</h3>
          <div class="likes-container">
            <i class="fa-regular fa-heart"></i>
            <span id="show${shows[i].id}" class="likes-num">LIKES</span>
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
    card.classList.add('actora-card');
    card.innerHTML = `<img class="card-img" src="${actors[i].image.medium}" alt="${actors[i].name} poster image">
        <div class="card-title">
          <h3>${actors[i].name}</h3>
          <div class="likes-container">
            <i class="fa-regular fa-heart"></i>
            <span id="person${actors[i].id}" class="likes-num">LIKES</span>
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
    card.classList.add('show-card');
    card.innerHTML = `<img class="card-img" src="${actoras[i].image.medium}" alt="${actoras[i].name} poster image">
        <div class="card-title">
          <h3>${actoras[i].name}</h3>
          <div class="likes-container">
            <i class="fa-regular fa-heart"></i>
            <span id="person${actoras[i].id}" class="likes-num">LIKES</span>
          </div>
        </div>
        <button id="${actoras[i].id}" class="modal-btn actoras-modal" onClick="">Comments</button>`;
    section.appendChild(card);
  }
  return section.outerHTML;
};

const getLikes = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/58F4JzqWcLrmImL87g5B/likes';
  return makeAPICall(url);
};

const displayLikes = () => {
  const numbers = document.querySelectorAll('.likes-num');
  getLikes().then((likes) => {
    numbers.forEach((num) => {
      const item = likes.find((like) => like.item_id === num.id);

      if (item) {
        num.innerHTML = `${item.likes} likes`;
      } else {
        num.innerHTML = '0 likes';
      }
    });
  });
};

const addLike = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/58F4JzqWcLrmImL87g5B/likes';
  const data = {
    item_id: id,
  };
  await makeAPIPost(url, data)
    .then(() => {
      displayLikes();
    });
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
      if (heart.classList.contains('pressed')) return;
      heart.classList.add('fa-regular');
      heart.classList.remove('fa-solid');
    });
  });
  hearts.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      if (heart.classList.contains('pressed')) return;
      heart.classList.add('pressed');
      heart.classList.add('fa-solid');
      const { id } = e.target.nextSibling.nextSibling;
      addLike(id);
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
  displayLikes();
};

export default renderHome;
