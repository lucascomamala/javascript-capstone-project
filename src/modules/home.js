const content = document.querySelector('main');

const showsSection = (shows) => {
  const section = document.createElement('section');
  section.id = 'shows';
  section.innerHTML = `<div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="show-card">
        <img class="card-img" src="SHOWIMGSRC" alt="SHOWIMGALT">
        <div class="card-title">
          <h3>SHOWTITLE</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>`;
  return section.outerHTML;
}

const actorsSection = (shows) => {
  const section = document.createElement('section');
  section.id = 'actors';
  section.innerHTML = `<div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actor-card">
        <img class="card-img" src="ACTORIMGSRC" alt="ACTORIMGALT">
        <div class="card-title">
          <h3>ACTORNAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>`;
  return section.outerHTML;
}

const actorasSection = (shows) => {
  const section = document.createElement('section');
  section.id = 'actoras';
  section.innerHTML = `<div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>
      <div class="actora-card">
        <img class="card-img" src="ACTORAIMGSRC" alt="ACTORAIMGALT">
        <div class="card-title">
          <h3>ACTORANAME</h3>
          <div class="likes-container">
            <i class="fa-solid fa-heart"></i>
            <span>X LIKES</span>
          </div>
        </div>
        <button class="comments-btn" onClick="">Comments</button>
      </div>`;
  return section.outerHTML;
}

const renderHome = (shows, actors, actoras) => {
  content.insertAdjacentHTML('beforeend', showsSection());
  content.insertAdjacentHTML('beforeend', actorsSection());
  content.insertAdjacentHTML('beforeend', actorasSection());
}

export default renderHome;
