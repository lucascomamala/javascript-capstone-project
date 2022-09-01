/**
 * @jest-environment jsdom
 */

import { displayCount } from '../nav.js';
import mockNav from '../__mocks__/nav.mock.js';

test('Add x items and check count', () => {
  const x = 10;
  mockNav(x);
  displayCount();
  const counter = document.querySelector('.card-counter').innerHTML;
  expect(counter).toBe(`(${x})`);
});
