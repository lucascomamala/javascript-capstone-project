const content = document.querySelector('main');

const showsSection = `<section id="shows">
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
    </section>`;

const renderHome = (shows, actors, actoras) => {
  content.insertAdjacentHTML('beforeend', showsSection);
}

export default renderHome;
