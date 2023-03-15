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


  const getNumberOfLikes = (item) => {
console.log("Hello")
    console.log((document.querySelector(`.item[data-index="${item.item_id}"]`)))
    if (document.querySelector(`.item[data-index="${item.item_id}"]`)) {
      const data = document.querySelector(
        `.item[data-index="${item.item_id}"] .counter`,
      )
      data.textContent = item.likes;
      console.log(data);
    }
  };

  

const displayShow = async () =>{
  const data = await getLikes();
  console.log(data)
const display = await getUser();
let innerHTML ='';
var items = display.slice(0,6);
// const counters = await getLikes()
// console.log(counters);
// const movies = document.createElement('div');
// movies.classList.add('card-container')
const container = document.querySelector('.main-content');
items.forEach((element,index) => {
  const movies = document.createElement('div');
movies.className = 'item';
movies.setAttribute('data-index', index);
      innerHTML = `
    <img src="${element.image.medium}" alt="">
    <div class="card-detail"><p class="card-name">${element.name}</p>
    <i id = "${element.id}" class='far fa-heart'></i></div>
    <div class="count-container"><span class="counter">0</span>
    <p>likes</p></div>
    <button id = "${element.id}" type = "submit" class="commentBtn">Comments</button>
`
movies.innerHTML = innerHTML;
container.appendChild(movies);

const likeButton = document.querySelector(
  `.item[data-index="${index}"] .far`,
);



likeButton.addEventListener('click', async () => {
  
  await likes(index);
  // const data = await getLikes();
  // console.log(data)
  console.log("Like button", index)
  const itemIndex = await data.filter((item) => item.item_id === index);
  
  getNumberOfLikes(itemIndex[0]);
  
});
});

}



const hitLike = document.querySelector('.main-content');

const displayPopUp =  ((element, id) =>{
    let innerHTML = '';
    innerHTML += `<div id = "${element.id}" class="popup-blur">
    <div class="popup-countainer">
        <img class="comment-img" src="" alt="">
        <h2 class="title">${element.name}</h2>
        <div class="detail">
            <p class="langauge">${element.language}</p>
            <p class="runtime">${element.runtime}</p>
        </div>
        <h3>Comments</h3>
        <div class="comment-section">
        </div>
        <h3>Add a comment</h3>
        <form action="submit">
            <input type="text" placeholder="Your name">
            <textarea name="comment-text" id="" cols="30" rows="10" placeholder="Your insight"></textarea>
            <button type="submit"></button>
        </form>
    </div>
</div>`
const popUp = document.querySelector('.popUp');
popUp.innerHTML = innerHTML;
popUp.style.display = "block";

})

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




    //  async function likesCount(id) {
    //     const counters = await getLikes()
    //     counters.forEach((item) => {
    //         if (item.item_id === id){
    //             const selector = document.querySelector('')
    //         }
    //     })
    // }

// hitLike.addEventListener('click', async (e) => {
//   const click = e.target;
//   if ( click.classList.contains("far")){
//     const hearts = document.querySelectorAll('.far')
//     console.log(hearts)
//     hearts.forEach((heart) => {
//       if(heart.id === e.target.id){
//         console.log(heart.id)
//         likes(heart.id)
//         displayShow()        
//       }
//     })
//   }
//  })
displayShow()


// const list = document.querySelector('.main-content')



// const commentButton = document.querySelector(
//   `.item[data-index="${element.id}"] .commentBtn`,
// );

// commentButton.addEventListener('click', () => {
//   displayPopUp(items, element.id);
// });
// hitLike.addEventListener('click',(event)  =>{
//   if (event.target.classList.contains('commentBtn')){
//     const comment = document.querySelectorAll('.commentBtn')
//         comment.forEach ((comments) => {
//          if (event.target.id  === comments.id){
//         displayPopUp(element, comments.id);
//       }      
//     })
//    }
//  })
// });movies.innerHTML = innerHTML;
// document.querySelector('.main-content').appendChild(movies);

