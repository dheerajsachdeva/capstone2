import { getComment, postComment } from './API.js';
import { getCommentCount } from './counters.js';

const appendComment = (comment) => {
  const commentList = document.createElement('li');
  commentList.innerHTML = ` <span class ="date">${comment.creation_date} </span> <span class="name">${comment.username} </span><span class="comment">${comment.comment}</span>`;
  return commentList;
};

const displayPopUp = async (element, index) => {
  let innerHTML = '';
  innerHTML += `<div id = "${element.id}" class="popup-blur">
      <div class="popup-countainer">
      <i class="fa fa-close"></i>
          <div class ="img-container"><img class="comment-img" src="${element.image.original}" alt="">
          </div>
          <h2 class="title">${element.name}</h2>
          <div class="detail">
              <p class="langauge">Language: ${element.language}</p>
              <p class="runtime">Runtime: ${element.runtime} mins</p>
          </div>
          <div class ="summary"> 
            <h4>Summry:</h4>
            ${element.summary}
          </div>
          <div class="comment-section">
          <h3>Comments(<span id="comment-count">0</span>)</h3>
          <ul class="commentList"></ul>
          <h4>Add a comment</h4>
          <form class="form" action="submit">
              <input id = "name" type="text" placeholder="Your name">
              <textarea name="comment-text" id="text" cols="20" rows="5" placeholder="Your insight"></textarea>
              <button id="submit" type="submit">Comment</button>
          </form>
          </div>
  </div>`;
  const popUp = document.querySelector('.popUp');
  popUp.innerHTML = innerHTML;
  popUp.style.display = 'block';
  const close = document.querySelector('.fa-close');
  close.addEventListener('click', () => {
    popUp.style.display = 'none';
  });

  const commentList = document.querySelector('.commentList');
  const comments = await getComment(index);
  if (comments.length >= 1) {
    comments.forEach((comment) => {
      commentList.appendChild(appendComment(comment));
    });
    document.querySelector('#comment-count').textContent = getCommentCount(comments);
  }

  const form = document.querySelector('.form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const textInput = document.querySelector('#text');
    if (nameInput !== '' && textInput !== '') {
      await postComment(index, nameInput.value, textInput.value);
      const commentList = document.querySelector('.commentList');
      commentList.innerHTML = '';
      nameInput.value = '';
      textInput.value = '';
      const comments = await getComment(index);
      comments.forEach((comment) => {
        commentList.appendChild(appendComment(comment));
      });
      document.querySelector('#comment-count').textContent = comments.length;
    }
  });
};

export default displayPopUp;