/**
 * @jest-environment jsdom
 */

import { getLikes } from './API.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        likes: {
          item_id: 'item1',
        },
      },
      {
        likes: {
          item_id: 'item1',
        },
      },
    ],
  ),
}));
describe('likes counter', () => {
  it('test likes counter', async () => {
    const res = await getLikes();

    expect(res.length).toBe(2);
  });
});
