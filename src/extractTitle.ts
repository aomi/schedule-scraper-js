import * as cheerio from 'cheerio';

export function extractTitle($: cheerio.Root): string {
    let title = $('.ddtitle').first().text();
    return title.replace(/\s+/g, ' ');
}