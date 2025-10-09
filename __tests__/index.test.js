import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import reverse from '../src/index.js';

// Константы для работы с путями (потому что __dirname не работает в ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('reverse long text from file', () => {
  const text = fs.readFileSync(getFixturePath('text.txt'), 'utf-8');
  const expected = fs.readFileSync(getFixturePath('reversed.txt'), 'utf-8');

  expect(reverse(text)).toEqual(expected);
});
