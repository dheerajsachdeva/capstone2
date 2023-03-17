const involvementId = 'VdUaJZjJhUjlpm3843JM';
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;

const getUser = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const user = await response.json();
  return user;
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

// API for get comment
const getComment = async (index) => {
  const response = await fetch(`${commentUrl}?item_id=${index}`);
  const user = await response.json();
  return user;
};

export {
  getUser, likes, getLikes, postComment, getComment,
};