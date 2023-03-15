import './style.css'
import Movie from './asset/movie.jpg'
const logo = document.getElementById('logo');
logo.src = Movie

// Creating a new Movie
// eslint-disable-next-line

const involvementId = '7cDwRmQIgBOyAng5AzbR';
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`
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
const displayShow = async () =>{
const display = await getUser();
let innerHTML ='';
var items = display.slice(0,6);
const counters = await getLikes()
console.log(counters);
items.forEach((element,item_id) => {
      innerHTML += `<div class="card-container">
    <img src="${element.image.medium}" alt="">
    <div class="card-detail"><p class="card-name">${element.name}</p>
    <i id = "${element.id}" class='far fa-heart'></i></div>
    <div class="count-container"><span class="counter">${counters[item_id+1].likes}</span>
    <p>likes</p></div>
    <button type = "submit" class="commentBtn">Comments</button>
</div>`
const list = document.querySelector('.main-content')
list.innerHTML = innerHTML;
});
}

const likes = async (id) => {
    const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"item_id": "${id}"}`,
   };
  const response = await fetch(likeUrl, options);
  const show = await response.json();
 return show;
};

const getLikes = async () => {
  const response = await fetch(likeUrl);
  const user = await response.json();
    return user;
};

// const test =(async () => {
//   console.log(await getLikes())
// })()


const hitLike = document.querySelector('.main-content');

    //  async function likesCount(id) {
    //     const counters = await getLikes()
    //     counters.forEach((item) => {
    //         if (item.item_id === id){
    //             const selector = document.querySelector('')
    //         }
    //     })
    // }

hitLike.addEventListener('click', async (e) => {
  const click = e.target;
 if ( click.classList.contains("far")){
    const hearts = document.querySelectorAll('.far')
    console.log(hearts)
    hearts.forEach((heart) => {
      if(heart.id === e.target.id){
        likes(heart.id)
        displayShow()        
      }
    })
  }displayShow() 
 })
displayShow()

