// Open https://www.kshs.kh.edu.tw/sitemap/index?Parser=99,10,27 in your Web Browser and execute this script
// @/lib/pageData.json

let groups = []; document.querySelectorAll('.col-sm-6').forEach(group => {
    const gT = group.querySelector('.sitemap_title a').title;       // Group title
    let pgs = { title: gT, pages: [] };                             // Setup group
    group.querySelectorAll('li:not(.sitemap_title) a').forEach(pg => {
        const pgT = pg.title;                                       // Page title
        const pgP = /\?Parser=(.*)/.exec(pg.href)?.[1];             // Parser
        const pgL = pgP ? pg.href.replace(/^.\.\./, '') : pg.href   // Page URL
        pgs.pages.push({ title: pgT, parser: pgP, link: pgL });     // Add page data to group
    })
    groups.push(pgs);   // Add to groups
})
console.log(groups);    // Output
