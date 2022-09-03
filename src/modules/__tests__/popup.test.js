/**
 * @jest-environment jsdom
 */

import { getCommentCount } from '../popups.js';
import mockPopup from '../__mocks__/popup.mock.js';

test('Add x comments and check count', () => {
  const x = 10;
  mockPopup(x);
  const test = getCommentCount();
  expect(test).toBe(x);
});
