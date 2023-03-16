import './style.css';

// eslint-disable-next-line

import Movie from './asset/movie.jpg';

const logo = document.getElementById('logo');
logo.src = Movie;

// Creating a new Movie
// eslint-disable-next-line


const involvementId = 'VdUaJZjJhUjlpm3843JM';
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;
// eslint-disable-next-line
const newShow = async () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', options);
  const show = await response.json();
  return show;
};

const getUser = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const user = await response.json();
  return user;
};
const getNumberOfLikes = (item) => {
  if (document.querySelector(`.item[data-index="${item.item_id}"]`)) {
    const data = document.querySelector(
      `.item[data-index="${item.item_id}"] .counter`,
    );
    data.textContent = item.likes;
  }
};

const displayLikes = async (index) => {
  // eslint-disable-next-line
  await likes(index);
  // eslint-disable-next-line
  const data = await getLikes();
  // eslint-disable-next-line
  const itemIndex = await data.forEach((item) => getNumberOfLikes(item));
};

const displayShow = async () => {
  const movieCount = document.getElementById('movies-count');
  const display = await getUser();
  let innerHTML = '';
  const items = display.slice(0, 6);
  movieCount.textContent = items.length;
  const container = document.querySelector('.main-content');
  items.forEach((element, index) => {
    const movies = document.createElement('div');
    movies.className = 'item';
    movies.setAttribute('data-index', index);
    innerHTML = `
    <img class = "content-img" src="${element.image.medium}" alt="">
    <div class="card-detail"><p class="card-name">${element.name}</p>
    <i id = "${element.id}" class='fa fa-heart'></i></div>
    <div class="count-container"><span class="counter"></span>
    <p>likes</p></div>
    <button id = "${element.id}" type = "submit" class="commentBtn">Comments</button>
`;
    movies.innerHTML = innerHTML;
    container.appendChild(movies);
    displayLikes(element.id);

    const likeButton = document.querySelector(
      `.item[data-index="${index}"] .fa-heart`,
    );

    const commentButton = document.querySelector(`.item[data-index="${index}"] .commentBtn`);
    commentButton.addEventListener('click', async () => {
      // eslint-disable-next-line
      displayPopUp(element, index);
    });

    likeButton.addEventListener('click', async () => {
      // eslint-disable-next-line
      await likes(index);
      // eslint-disable-next-line
      const data = await getLikes();
      const itemIndex = await data.filter((item) => item.item_id === index);

      getNumberOfLikes(itemIndex[0]);
    });
  });
};

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
  // eslint-disable-next-line
  const comments = await getComment(index);

  if (comments.length !== 0) {
    comments.forEach((comment) => {
      commentList.appendChild(appendComment(comment));
    });
    document.querySelector('#comment-count').textContent = comments.length;
  }

  const form = document.querySelector('.form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const textInput = document.querySelector('#text');
    if (nameInput !== '' && textInput !== '') {
      // eslint-disable-next-line
      await postComment(index, nameInput.value, textInput.value);
      const commentList = document.querySelector('.commentList');
      commentList.innerHTML = '';
      nameInput.value = '';
      textInput.value = '';
      // eslint-disable-next-line
      const comments = await getComment(index);
      comments.forEach((comment) => {
        commentList.appendChild(appendComment(comment));
      });
      document.querySelector('#comment-count').textContent = comments.length;
    }
  });
};

const likes = async (index) => {
  const response = await fetch(likeUrl, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: index,
    }),
  });
  return response;

};

const getLikes = async () => {
  const response = await fetch(likeUrl);
  const likes = await response.json();
  return likes;
};

// const test =(async () => {
//   console.log(await getLikes())
// })()

displayShow();

// API for post Comment

const postComment = async (index, username, comment) => {
  await fetch(commentUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: index,
      username,
      comment,
    }),
    headers: { 'content-Type': 'application/json; charset=UTF-8' },
  });
};
postComment();
// API for get comment
const getComment = async (index) => {
  const response = await fetch(`${commentUrl}?item_id=${index}`);
  const user = await response.json();
  return user;
};
getComment();
