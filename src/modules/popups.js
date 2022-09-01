const content = document.querySelector('main');

// render Comments part of the Popup
// eslint-disable-next-line no-unused-vars
const renderComments = (id, array, persona) => {
  const section = document.getElementById('popup-section');
  section.innerHTML += `<div id="popComments">
    <h2>Comments (2)</h2>
    <div>No comments yet</div>
    <p>Add a Comment</p>
    <form onsubmit="" id="popCommentsFrom" method="post">
    <ul class="contact-input-form">
      <li>                                
        <label><input id="popfrmName" type="text" name="name" 
        placeholder="Your name" maxlength="30" required />
        </label>
      </li>
      <li>
        <label><textarea id="popfrmText"  placeholder="Your insights"
         name="insights" cols="30" rows="5" maxlength="200" required></textarea>
         </label>
      </li>
      <li class="popCommentLi">
        <button type="submit" class="popCommentBtn">
        Comment</button>            
      </li>                              
    </ul>    
  </form>
  </div>`;
};

// render Shows part of the Popup
const popupSectionShows = (shows) => {
  const secc = document.getElementById('popup-section');
  if (secc !== null) secc.parentNode.removeChild(secc);
  const section = document.createElement('section');
  section.id = 'popup-section';
  section.innerHTML = `<a id="popupClose" href='javascript:void(0);'>✖</a>  
  <div id="popup">
    <div class = "pop-image">          
      <img src="${shows[0].image.original}" alt="Penny Dreadful">
    </div>
    <div class="pop-description">
      <h1>${shows[0].name}</h1>
      <p>Genre: <b>${shows[0].genres}</b></p>
      <div class="pop-summary">
        <p><b>Summary:</b></p>
        ${shows[0].summary}
      </div>  
      <p>Language: <b>${shows[0].language}</b></p>
      <p>Premiered: <b>${shows[0].premiered}</b></p>
      <p>Rating: <b>${shows[0].rating.average}</b></p>
    </div>        
  </div>`;
  content.insertAdjacentHTML('afterbegin', section.outerHTML);
};

// render Actors part of the Popup
const popupSectionActors = (actors) => {
  const secc = document.getElementById('popup-section');
  if (secc !== null) secc.parentNode.removeChild(secc);
  const section = document.createElement('section');
  section.id = 'popup-section';

  section.innerHTML = `<a id = "popupClose" href='javascript:void(0);'>✖</a>  
  <div id="popup">
    <div class = "pop-image">          
      <img src="${actors[0].image.original}" alt="Penny Dreadful">
    </div>
    <div class="pop-description">
      <h1>${actors[0].name}</h1>
      <p>Country: <b>${actors[0].country.name}</b></p>
      <p>Birthday: </p><b>${actors[0].birthday}</b>
      <p>Gender: <b>${actors[0].gender}</b></p>
      <p><a href="${actors[0].url}">Click for more details</a></p> 
    </div>      
  </div>`;
  content.insertAdjacentHTML('afterbegin', section.outerHTML);
};

const createPopup = (id, array, person) => {
  // eslint-disable-next-line prefer-arrow-callback, func-names
  const myArray = array.filter(function (arr) { return arr.id === parseInt(id, 10); });

  if (myArray.length !== 1) return;
  if (person) {
    popupSectionActors(myArray);
  } else {
    popupSectionShows(myArray);
  }

  renderComments(id, array, person);
  document.getElementById('popup-section').style.display = 'block';
  // eslint-disable-next-line no-use-before-define
  loadListenerClosePopup();
};

const closePopup = () => {
  document.getElementById('popup-section').style.display = 'none';
};

const loadListenerClosePopup = () => {
  document.getElementById('popupClose').addEventListener('click', closePopup);
};

export { createPopup, loadListenerClosePopup };