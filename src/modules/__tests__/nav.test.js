/**
 * @jest-environment jsdom
 */

import { displayCount } from '../nav.js';
import mockNav from '../__mocks__/nav.mock.js';

test('Add 9 items and check count', () => {
  mockNav();
  displayCount(0);
  const counter = document.querySelector('.card-counter').innerHTML;
  console.log(counter);
  expect(counter).toBe('(9)');
});
