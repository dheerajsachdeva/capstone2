import './style.css'
import Movie from './asset/movie.jpg'
const logo = document.getElementById('logo');
logo.src = Movie

// Creating a new Movie
// eslint-disable-next-line

const involvementId = 'j9d7Qb2Ve9EiXLXtVhY9';
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`

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
  let newArr = []
const displayShow = async () =>{
const display = await getUser();
let innerHTML ='';
var items = display.slice(0,6);
// newArr = items.map(x => x)
// console.log(newArr);
const counters = await getLikes()
console.log(counters[2])
items.forEach((element,index) => {
  newArr.push(element)
    innerHTML += `<div class="card-container">
    <img src="${element.image.medium}" alt="">
    <div class="card-detail"><p class="card-name">${element.name}</p>
    <i id = "${element.id}" class='far fa-heart'></i></div>
    <div class="count-container"><span class="counter">${counters[index].likes}</span>
    <p>likes</p></div>
    <button type = "button" class="commentBtn">Comments</button>
</div>`
const list = document.querySelector('.main-content')
list.innerHTML = innerHTML;

// likes(element.id)
});
}

const likes = async (id) => {
  const display = await getUser();
  var items = display.slice(0,6);
  
    const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        item_id: id
      }),
    
  };

  const response = await fetch(likeUrl, options);
  const show = await response.json();
// console.log(show);
  return show;
};

const getLikes = async () => {
  const response = await fetch(likeUrl);
  const user = await response.json();
  // displayUser();
  
  return user;
};
const test =(async () => {
  console.log(await getLikes())
})()


const hitLike = document.querySelector('.main-content');
// console.log(hitLike)

  hitLike.addEventListener('DOMContentLoader', (e) => {
    const click = e.target;
    if(click.classList.contains('.counter')){
      const counts = document.querySelectorAll('.counter')
      console.log(counts)
    }
  })
    // counts.forEach((count) => {

    // })

hitLike.addEventListener('click', (e) => {
  const click = e.target;
  console.log(e.target.id)
  if ( click.classList.contains("far")){
    const hearts = document.querySelectorAll('.far')
    console.log(hearts)
    hearts.forEach((heart) => {
      if(heart.id === e.target.id){
        likes(heart.id)
      }
    })
  }
  displayShow()
})
// displayLikes()
likes()
getLikes()
displayShow()
// console.log(newArr)
