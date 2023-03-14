import './style.css'
// import Movie from './asset/movie.jpg'
// const logo = document.getElementById('logo');
// logo.src = Movie

// Creating a new Movie
// eslint-disable-next-line

const involvementId = 'j9d7Qb2Ve9EiXLXtVhY9';
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/:${involvementId}/likes/`

const newShow = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body: '{ "name": "My Movies" }',
    };
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', options);
    const show = await response.json();
    return show;
  };

  const getUser = async () => {
    const response = await fetch('https://api.tvmaze.com/shows');
    const user = await response.json();
    // displayUser();
    
    return user;
  };
  
const displayShow = async () =>{
const display = await getUser();
let innerHTML ='';
var items = display.slice(0,6);
items.forEach(element => {
    innerHTML += `<div class="card-container">
    <img src="${element.image.medium}" alt="">
    <div class="card-detail"><p class="card-name">${element.name}</p>
    <i class='far fa-heart'></i></div>
    <div class="count-container"><span class="counter"></span>
    <p>likes</p></div>
    <button type = "button" class="commentBtn">Comments</button>
</div>`
const list = document.querySelector('.main-content')
list.innerHTML = innerHTML;
});
}

// const like = document.querySelector('.like-icon');

// like.addEventListener('click', (event) =>{
// event.preventDefault();


// })


displayShow()
  