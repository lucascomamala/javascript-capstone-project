const mockPopup = (x) => {
  const content = document.createElement('section');
  const counter = document.createElement('div');
  counter.classList.add('popComments');
  const comments = document.createElement('div');
  comments.classList.add('pop-textComments');

  document.body.innerHTML = `<section id="popup-section">
<div id="popComments"><div class="pop-textComments">
</div></div></section>`;
  // const commentsHTML = document.querySelector('.pop-textComments');
  // commentsHTMLinnerHTML = '';

  for (let i = 0; i < x; i += 1) {
    const comentario = document.createElement('p');
    comentario.classList.add('comment');
    comments.appendChild(comentario);
  }
  content.appendChild(counter);
  content.appendChild(comments);
  document.body.appendChild(content);
};

export default mockPopup;