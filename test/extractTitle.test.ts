import { extractTitle } from '../src/extractTitle';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, './ECE260_202009.html');
const $ = cheerio.load(fs.readFileSync(filePath));
test('extractTitle be extract title from HTML', (): void => {
    expect(extractTitle($)).toBe('Continuous-Time Signals and Systems - 10953 - ECE 260 - A01');
})