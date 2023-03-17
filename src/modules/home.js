import { getUser, likes, getLikes } from './API.js';
import displayPopUp from './comment.js';
import { getMovieCount } from './counters.js';

const getNumberOfLikes = (item) => {
  if (document.querySelector(`.item[data-index="${item.item_id}"]`)) {
    const data = document.querySelector(
      `.item[data-index="${item.item_id}"] .counter`,
    );
    data.textContent = item.likes;
  }
};

const displayLikes = async (index) => {
  await likes(index);
  const data = await getLikes();
  data.forEach((item) => getNumberOfLikes(item));
};

const displayShow = async () => {
  const movieCount = document.getElementById('movies-count');
  const display = await getUser();
  let innerHTML = '';
  const items = display.slice(0, 9);
  movieCount.textContent = getMovieCount(items);
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
      displayPopUp(element, index);
    });

    likeButton.addEventListener('click', async () => {
      await likes(index);
      const data = await getLikes();
      const itemIndex = await data.filter((item) => item.item_id === index);

      getNumberOfLikes(itemIndex[0]);
    });
  });
};

export default displayShow;
