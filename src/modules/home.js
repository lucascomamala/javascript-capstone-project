const content = document.querySelector('main');

const showsSection = (shows) => {
  const section = document.createElement('section');
  section.id = 'shows';
  for (let i = 0; i < shows.length; i++) {
    const card = document.createElement('div');
    card.classList.add('actor-card');
    card.innerHTML = `<img class="card-img" src="${shows[i].image.medium}" alt="${shows[i].name} poster image">
        <div class="card-title">
          <h3>${shows[i].name}</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>`;
    section.appendChild(card);
  }
  return section.outerHTML;
}

const actorsSection = (actors) => {
  const section = document.createElement('section');
  section.id = 'actors';
  for (let i = 0; i < actors.length; i++) {
    const card = document.createElement('div');
    card.classList.add('actora-card');
    card.innerHTML = `<img class="card-img" src="${actors[i].image.medium}" alt="${actors[i].name} poster image">
        <div class="card-title">
          <h3>${actors[i].name}</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>`;
    section.appendChild(card);
  }
  return section.outerHTML;
}

const actorasSection = (actoras) => {
  const section = document.createElement('section');
  section.id = 'actoras';
  for (let i = 0; i < actoras.length; i++) {
    const card = document.createElement('div');
    card.classList.add('show-card');
    card.innerHTML = `<img class="card-img" src="${actoras[i].image.medium}" alt="${actoras[i].name} poster image">
        <div class="card-title">
          <h3>${actoras[i].name}</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>`;
    section.appendChild(card);
  }
  return section.outerHTML;
}

const renderHome = (shows, actors, actoras) => {
  content.insertAdjacentHTML('beforeend', showsSection(shows));
  content.insertAdjacentHTML('beforeend', actorsSection(actors));
  content.insertAdjacentHTML('beforeend', actorasSection(actoras));
}

export default renderHome;
