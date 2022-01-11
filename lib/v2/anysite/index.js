const parser = require('../../utils/rss-parser');
const got = require('@/utils/got');

module.exports = async (ctx) => {
    const url = decodeURI(ctx.params.scheme);
    const resp = await got(url);
    const feed = await parser.parseString(resp.data);

    const items = await Promise.all(
        feed.items.slice(0, 10).map((item) => {
            const single = {
                title: item.title,
                description: item.content,
                author: item.author,
                pubDate: item.pubDate,
                link: item.link,
            };
            return Promise.resolve(single);
        })
    );

    ctx.state.data = {
        title: feed.title,
        link: feed.link,
        description: feed.description,
        item: items,
    };
};
