/**
 * @jest-environment jsdom
 */

import { getComment } from './API.js';

const getMovieCount = (items) => {
  const result = items.length;
  return result;
};
const appendComment = (data) => {
  const commentList = document.createElement('li');
  commentList.innerHTML = `${data.comment}`;
  return commentList;
};

global.fetch = jest.fn(() => {
  const testData = [
    {
      item_id: 'item1',
      username: 'Basim',
      comment: 'Test1',
    },
    {
      item_id: 'item1',
      username: 'Dheeraj',
      comment: 'Test2',
    },
  ];
  return Promise.resolve({
    json: () => Promise.resolve(testData),
  });
});

beforeEach(() => {
  fetch.mockClear();
});

describe('Comments counter test', () => {
  test('Zero Comment test', () => {
    document.body.innerHTML = '<div>'
    + '  <ul id="comments"></ul>'
    + '</div>';
    const commentsList = document.getElementById('comments');
    const nComments = commentsList.childNodes.length;
    expect(nComments).toBe(0);
  });

  test('Add 2 comments', async () => {
    document.body.innerHTML = '<div>'
   + '  <ul id="comments"></ul>'
   + '</div>';
    const commentsList = document.getElementById('comments');
    const res = await getComment('item1');
    res.forEach((data) => {
      commentsList.appendChild(appendComment(data));
    });
    const nComments = commentsList.childNodes.length;
    expect(nComments).toBe(2);
  });
});

describe('Movies counter testing', () => {
  test('Number of movies', () => {
    const movieList = [{ name: 'Hero' }, { name: 'Mission Impossible' }];
    const movieNum = getMovieCount(movieList);
    expect(movieNum).toBe(2);
  });
});