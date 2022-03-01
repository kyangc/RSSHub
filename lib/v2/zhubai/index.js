const got = require('@/utils/got')
const { parseDate } = require('@/utils/parse-date')
const cheerio = require('cheerio')

module.exports = async (ctx) => {
    const { id } = ctx.params
    const limit = ctx.query.limit ? parseInt(ctx.query.limit) : 20
    const mode = ctx.query.mode ? parseInt(ctx.query.mode) : 0

    // get page content
    const entryPage = await got({
        method: 'get',
        url: `https://${id}.zhubai.love/api/publications/${id}/posts?publication_id_type=token&limit=${limit}`,
        headers: {
            Referer: `https://${id}.zhubai.love/`
        }
    })
    const entries = entryPage.data.data
    const { name, description } = entries[0].publication

    // parse article contents
    const articles = mode === 233 ? await Promise.all(entries.map((item) => {
        const link = `https://${id}.zhubai.love/posts/${item.id}`
        return ctx.cache.tryGet(link, async () => {
            // launch headless browser for content scrapping
            let content = ''
            try {
                const browser = await require('@/utils/puppeteer')()
                const page = await browser.newPage()
                await page.goto(link, {
                    timeout: 60000, waitUntil: 'networkidle2'
                })
                const html = await page.evaluate(// eslint-disable-next-line no-undef
                    () => document.documentElement.innerHTML)
                await browser.close()

                const $ = cheerio.load(html)
                content = $('[class^="PostPage_content"]').html()
            } catch (e) {
                console.error(e)
                content = '拉取全文失败...'
            }
            return {
                title: item.title, pubDate: parseDate(item.created_at), link, author: name, description: content
            }
        })
    })) : entries.map((item) => ({
        title: item.title, pubDate: parseDate(item.created_at), link: `https://${id}.zhubai.love/posts/${item.id}`,
        author: name
    }))

    // return result
    ctx.state.data = {
        title: name, link: `https://${id}.zhubai.love/`, description, item: articles
    }
}
