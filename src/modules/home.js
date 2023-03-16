import {getUser ,likes, getLikes} from './API.js'
import {displayPopUp} from './comment.js'

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
    const items = display
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
  
  export {displayShow}
  