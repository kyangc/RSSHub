const cheerio = require('cheerio')
const got = require('@/utils/got')

const baseUrl = 'http://jandan.net/'

module.exports = async (ctx) => {
    const { sub_model } = ctx.params

    let rssTitle
    let desc

    switch (sub_model) {
    case 'pic':
        rssTitle = '无聊图'
        desc = '煎蛋官方无聊图，无限活力的热门图区。'
        break

    case 'ooxx':
        rssTitle = '随手拍'
        desc = '分享你的经典一刻。'
        break

    case 'girl':
        rssTitle = '妹子图'
        desc = ''
        break

    case 'top-ooxx':
        rssTitle = '随手拍热榜'
        desc = ''
        break

    case 'top-4h':
        rssTitle = '4小时热榜'
        desc = ''
        break

    case 'top':
        rssTitle = '无聊图热榜'
        desc = ''
        break

    default:
        rssTitle = '未知内容'
        desc = '未知内容，请前往 https://github.com/DIYgod/RSSHub/issues 提交 issue'
    }

    const response = await got({
        method: 'get',
        url: `${baseUrl}${sub_model}/`,
        headers: {
            Referer: 'http://jandan.net'
        }
    })

    const $ = cheerio.load(response.data)
    const items = []
    $('.commentlist > li').each((_, item) => {
        // get comment id, if 'adsense', skip.
        const commentId = $(item).attr('id')
        if (commentId === 'adsense') {
            return
        }

        // parse all images in comment, if empty, skip.
        const imgList = []
        $(item).find('.view_img_link').each((_, item) => {
            const imgUrl = $(item).attr('href')
            if (imgUrl !== undefined) {
                imgList.push(imgUrl)
            }
        })
        if (imgList.length === 0) {
            return
        }

        // parse number id
        const pureId = commentId.replace('comment-', '')

        // parse comment text content
        const text = $(item).find('.text p').text().split('[查看原图]').join('') || ''

        // build feed item
        items.push({
            guid: commentId,
            title: `${rssTitle}(${pureId})`,
            description:
                `${text}<br>` + imgList.reduce((description, imgUrl) => {
                    description += `<img src='http:${imgUrl}'><br>`
                    return description
                }, ''),
            link: `https://jandan.net${$(item).find('.righttext').find('a').attr('href')}`
        })
    })

    ctx.state.data = {
        title: `煎蛋${rssTitle}`,
        link: `${baseUrl}${sub_model}/`,
        description: `${desc}`,
        item: items.reverse()
    }
}

