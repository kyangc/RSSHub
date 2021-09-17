const parser = require('@/utils/rss-parser')
const got = require('@/utils/got')
const cheerio = require('cheerio')

module.exports = async (ctx) => {
    // use this for right favicon
    const { id } = ctx.params
    const feeds = await parser.parseURL(`https://api.feeddd.org/feeds/${id}`)

    const items = await Promise.all(
        feeds.items.map(async (feed) => {
            const cache = await ctx.cache.get(feed.link)
            if (cache) {
                // use cache
                return Promise.resolve(JSON.parse(cache))
            } else {
                // try to scrap article
                const response = await got.get(feed.link)
                const $ = cheerio.load(response.data)
                const post = $('#js_content')

                // replace img elements
                post.find('img').each((_, img) => {
                    const dataSrc = $(img).attr('data-src')
                    if (dataSrc) {
                        $(img).attr('src', dataSrc)
                    }
                })

                // build article object
                const single = {
                    title: feed.title,
                    description: post.html(),
                    pubDate: new Date(feed.pubDate),
                    link: feed.link,
                    guid: feed.link
                }

                // store cache
                ctx.cache.set(feed.link, JSON.stringify(single))
                return Promise.resolve(single)
            }
        })
    )

    ctx.state.data = {
        title: `${feeds.title}`,
        link: `https://mp.weixin.qq.com`, // use this for right favicon
        description: feeds.description,
        item: items
    }
}
