const got = require('@/utils/got');
const entities = require('entities');
const cheerio = require('cheerio');
const date = require('@/utils/date');

module.exports = async (ctx) => {
    const { id } = ctx.params;

    // load page
    const response = await got.get(`https://wemp.app/accounts/${id}`);
    const $ = cheerio.load(response.data);
    const meta = $('.mp-info__list .mp-info__value');

    // parse wechat name
    const author = $(meta[0]).text().trim();

    // parse item info
    const year = new Date().getFullYear();
    const items = await Promise.all(
        $('.post-item__main')
            .get()
            .slice(0, 7) // once 7 articles
            .map(async (e) => {
                // generate publish date
                let pubDate = date(`${year} ${$(e).find('.post-item__date').text().trim()}`, 8);
                if (new Date(pubDate) > new Date()) {
                    pubDate = new Date(pubDate).setFullYear(year - 1);
                    pubDate = new Date(pubDate).toUTCString();
                }

                // parse link
                const link = `https://wemp.app${$(e).find('.post-item__title').attr('href')}`;

                // parse content from cache, if not exist, parse from network
                const response = await ctx.cache.tryGet(link, async () => (await got.get(link)).data);
                const article = cheerio.load(response);

                // parse wechat link
                const matchs = /"(url|temp_url)":"([^"]+mp\.weixin\.qq\.com[^"]+)"/.exec(response);
                let weixinLink = '';
                if (matchs && matchs[2]) {
                    weixinLink = entities.decodeXML(unescape(matchs[2].replace(/\\u/g, '%u')));
                }

                // generate article entity
                const single = {
                    title: $(e).find('.post-item__title').text().trim(),
                    link: weixinLink || link,
                    description: article('#content').html(),
                    pubDate,
                    author,
                };

                return Promise.resolve(single);
            })
    );

    ctx.state.data = {
        title: `微信公众号 - ${author}`,
        link: `https://wemp.app/accounts/${id}/`,
        description: $(meta[1]).text().trim(),
        item: items,
    };
};
