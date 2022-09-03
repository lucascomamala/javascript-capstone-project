import makeAPICall from './makeAPICall.js';

import makeAPIPost from './makeAPIPost.js';

const content = document.querySelector('main');

const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/58F4JzqWcLrmImL87g5B/comments?item_id=${id}`;
  return makeAPICall(url);
};

const getCommentCount = () => {
  let count = document.querySelectorAll('.comment').length;
  if (count === undefined) count = 0;
  return count;
};

// shows the Comments Counter
const displayCountComments = () => {
  const numComments = getCommentCount();
  const commentsHTML = document.getElementById('popComments');
  commentsHTML.children[0].innerHTML = `Comments (${numComments})`;
};

const displayComments = (id) => {
  getComments(id).then((comments) => {
    let commentsCounter = comments.length;
    if (commentsCounter === undefined) commentsCounter = 0;

    const commentsHTML = document.getElementById('popComments');
    commentsHTML.children[1].innerHTML = '';
    if (commentsCounter !== 0) {
      comments.forEach((read) => {
        commentsHTML.children[1].innerHTML
         += `<p class="comment">${read.creation_date} ${read.username}: ${read.comment}</p>`;
      });
    } else {
      // eslint-disable-next-line quotes
      commentsHTML.children[1].innerHTML = `<p class='pop-message'>No comments yet</p>`;
    }
    displayCountComments();
  });
};

const addNewComment = async (id, name, text) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/58F4JzqWcLrmImL87g5B/comments';
  const data = {
    item_id: id,
    username: name,
    comment: text,
  };
  await makeAPIPost(url, data)
    .then(() => {
      displayComments(id);
    });
};

// render Comments part of the Popup
// eslint-disable-next-line no-unused-vars
const renderComments = (idLarge) => {
  const section = document.getElementById('popup-section');
  section.innerHTML += `<div id="popComments">
    <h3></h3>
    <div class='pop-textComments'></div>
    <h4>Add a Comment</h4>
    <form onsubmit="" id="popCommentsForm" method="post">
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
        <button type="submit" id=${idLarge} class="popCommentBtn">
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
  let IdLarge = '';
  if (myArray.length !== 1) return;
  if (person) {
    IdLarge = 'actor-'.concat(myArray[0].id);
    popupSectionActors(myArray);
  } else {
    IdLarge = 'show-'.concat(myArray[0].id);
    popupSectionShows(myArray);
  }

  renderComments(IdLarge);
  document.getElementById('popup-section').style.display = 'block';

  // eslint-disable-next-line no-use-before-define
  loadListenerClosePopup();
  // eslint-disable-next-line no-use-before-define
  loadListenerCommentBtn();
  displayComments(IdLarge);
};

const closePopup = () => {
  document.getElementById('popup-section').style.display = 'none';
};

const loadListenerClosePopup = () => {
  document.getElementById('popupClose').addEventListener('click', closePopup);
};

const loadListenerCommentBtn = () => {
  document.getElementsByClassName('popCommentBtn')[0].addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('popfrmName');
    const text = document.getElementById('popfrmText');
    if ((name.value !== '') && (text.value !== '')) {
      addNewComment(e.target.id, name.value, text.value);
      name.value = '';
      text.value = '';
    }
  });
};

export { createPopup, getCommentCount };