import * as cheerio from 'cheerio';
import { redirect } from 'next/navigation'

export default async function getLatestEvent(url) {
    if (!url) return redirect('/latestevent');

    const items = [];
    const range = [1, 1];

    const res = await fetch(url, {
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);

    const $ = cheerio.load(await res.text());

    $('ul.list.news li:not(.list_head)').each((i, item) => {
        items.push({
            pinned: $(item).find('.type_top').length > 0,
            title: $(item).find('a').text(),
            date: $(item).find('.w15.hidden-xs').text(),
            link: `https://www.kshs.kh.edu.tw/latestevent/${$(item).find('a').attr('href')}`
        })
    })

    const pgItems = $('.page-item');
    const lastElem = pgItems.eq(pgItems.length - 1);
    const el = $(lastElem).find('.page-link');
    if (el.length > 0) {
        const parsers = el.attr('href').split(',');
        range[1] = Number(parsers[parsers.length - 1]) + 1;
    }

    return { items, range };
}
