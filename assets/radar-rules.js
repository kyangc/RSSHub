({
    '2047.name': { _name: '2047', '.': [{ title: '分类', docs: 'https://docs.rsshub.app/bbs.html#2047-fen-lei', source: ['/'], target: '/2047/:category?/:sort?' }] },
    '18comic.org': {
        _name: '18comic 禁漫天堂',
        '.': [
            { title: '成人 A 漫', docs: 'https://docs.rsshub.app/anime.html#18comic-jin-man-tian-tang-cheng-ren-a-man', source: ['/'], target: '/18comic/:category?/:time?/:order?/:keyword?' },
            { title: '搜索', docs: 'https://docs.rsshub.app/anime.html#18comic-jin-man-tian-tang-sou-suo', source: ['/'], target: '/18comic/search/:option?/:category?:keyword?/:time?/:order?' },
            { title: '专辑', docs: 'https://docs.rsshub.app/anime.html#18comic-jin-man-tian-tang-zhuan-ji', source: ['/'], target: '/18comic/album/:id' },
            { title: '文庫', docs: 'https://docs.rsshub.app/anime.html#18comic-jin-man-tian-tang-wen-ku', source: ['/'], target: '/18comic/blogs/:category?' },
        ],
    },
    '8world.com': { _name: '8视界', '.': [{ title: '分类', docs: 'https://docs.rsshub.app/new-media.html#_8-shi-jie-fen-lei', source: ['/:category', '/'], target: '/8world/:category?' }] },
    'aamacau.com': { _name: '論盡媒體 AllAboutMacau Media', '.': [{ title: '话题', docs: 'https://docs.rsshub.app/new-media.html#lun-jin-mei-ti-allaboutmacau-media-hua-ti', source: ['/'], target: '/:category?/:id?' }] },
    'blog.leanstack.com': { _name: "Ash Maurya's blog", '.': [{ title: "Ash Maurya's blog", docs: 'https://docs.rsshub.app/en/blog.html#ash-maurya', source: ['/'], target: '/ash-maurya' }] },
    'bandcamp.com': { _name: 'Bandcamp', '.': [{ title: 'Upcoming Live Streams', docs: 'https://docs.rsshub.app/multimedia.html#bandcamp-upcoming-live-streams', source: ['/live_schedule'], target: '/bandcamp/live' }] },
    'biodiscover.com': { _name: '生物探索', www: [{ title: '频道', docs: 'https://docs.rsshub.app/new-media.html#sheng-wu-tan-suo', source: '/:channel', target: '/biodiscover/:channel' }] },
    'bit.edu.cn': { _name: '北京理工大学', rszhaopin: [{ title: '人才招聘', docs: 'https://docs.rsshub.app/university.html#bei-jing-li-gong-da-xue-ren-cai-zhao-pin', source: ['/'], target: '/bit/:category?' }] },
    'bnu.edu.cn': {
        _name: '北京师范大学',
        '.': [{ title: '经济与工商管理学院', docs: 'https://docs.rsshub.app/universities.html#bei-jing-shi-fan-da-xue-jing-ji-yu-gong-shang-guan-li-xue-yuan', source: ['/'], target: '/bs/:category?' }],
    },
    'bse.cn': { _name: '北京证券交易所', '.': [{ title: '栏目', docs: 'https://docs.rsshub.app/finance.html#bei-jing-zheng-quan-jiao-yi-suo-lan-mu', source: ['/'], target: '/bse/:category?/:keyword?' }] },
    'btbtt20.com': { _name: 'BT之家', '.': [{ title: '分类', docs: 'https://docs.rsshub.app/multimedia.html#bt-zhi-jia', source: ['/'], target: '/btzj/:category?' }] },
    'bupt.edu.cn': { _name: '北京邮电大学', '.': [{ title: '人才招聘', docs: 'https://docs.rsshub.app/university.html#bei-jing-you-dian-da-xue-ren-cai-zhao-pin', source: ['/'], target: '/bupt/rczp' }] },
    'ccac.org.mo': { _name: '澳门廉政公署', '.': [{ title: '最新消息', docs: 'https://docs.rsshub.app/government.html#ao-men-lian-zheng-gong-shu', source: ['/:lang/news.html'], target: '/ccac/news/all/:lang' }] },
    'cebbank.com': {
        _name: '中国光大银行',
        '.': [
            { title: '外汇牌价 - 牌价总览', docs: 'https://docs.rsshub.app/new-media.html#eprice', source: ['/eportal/ui?pageId=477257'], target: '/quotation/all' },
            { title: '外汇牌价 - 历史记录', docs: 'https://docs.rsshub.app/new-media.html#eprice', source: ['/site/ygzx/whpj/rmbwhpjlspj/index.html?currcode=:id'], target: ({ id }) => `/quotation/${id}` },
        ],
    },
    'csc.edu.cn': {
        _name: '国家留学网',
        www: [
            { title: '遴选通知', docs: 'https://docs.rsshub.app/other.html#guo-jia-liu-xue-wang', source: '/*', target: '/csc/notice/lxtz' },
            { title: '综合项目专栏', docs: 'https://docs.rsshub.app/other.html#guo-jia-liu-xue-wang', source: '/*', target: '/csc/notice/xmzl' },
            { title: '常见问题解答', docs: 'https://docs.rsshub.app/other.html#guo-jia-liu-xue-wang', source: '/*', target: '/csc/notice/wtjd' },
            { title: '录取公告', docs: 'https://docs.rsshub.app/other.html#guo-jia-liu-xue-wang', source: '/*', target: '/csc/notice/lqgg' },
        ],
    },
    'distill.pub': { _name: 'Distill', '.': [{ title: 'Latest', docs: 'https://docs.rsshub.app/programming.html#distill', source: ['/'], target: '/distill' }] },
    'eastday.com': {
        _name: '东方网',
        www: [
            { title: '热点搜索', docs: 'https://docs.rsshub.app/traditional-media.html#dong-fang-wang-re-dian-sou-suo', source: '/', target: '/eastday/find' },
            { title: '原创', docs: 'https://docs.rsshub.app/traditional-media.html#dong-fang-wang-yuan-chuang', source: '/', target: '/eastday/portrait' },
        ],
    },
    'sciencedirect.com': { _name: 'ScienceDirect', '.': [{ title: 'Journal', docs: 'https://docs.rsshub.app/journal.html#sciencedirect-journal', source: ['/journal/:id', '/'], target: '/sciencedirect/journal/:id' }] },
    'eprice.com.tw': { _name: 'ePrice', '.': [{ title: 'ePrice 比價王', docs: 'https://docs.rsshub.app/new-media.html#eprice', source: ['/'], target: '/eprice/tw' }] },
    'eprice.com.hk': { _name: 'ePrice', '.': [{ title: 'ePrice 香港', docs: 'https://docs.rsshub.app/new-media.html#eprice', source: ['/'], target: '/eprice/hk' }] },
    'fisher.spb.ru': { _name: 'fisher spb', '.': [{ title: 'news', docs: 'https://docs.rsshub.app/en/other.html#fisher-spb', source: ['/news'], target: '/fisher-spb/news' }] },
    'focustaiwan.tw': { _name: 'Focus Taiwan', '.': [{ title: 'Category', docs: 'https://docs.rsshub.app/new-media.html#focus-taiwan-category', source: ['/:category', '/'], target: '/focustaiwan/category?' }] },
    'furstar.jp': { _name: 'Furstar', '.': [{ title: '安全文摘首頁', docs: 'https://docs.rsshub.app/shopping.html#an-quan-wen-zhai', source: ['/', '/'], target: '/secnews/index' }] },
    'gameapps.hk': { _name: 'GameApps.hk 香港手机游戏网', '.': [{ title: '最新消息', docs: 'https://docs.rsshub.app/game.html#gameapps-hk-xiang-gang-shou-ji-you-xi-wang', source: ['/'], target: '/gameapps' }] },
    'getdr.com': { _name: '趨勢科技防詐達人', '.': [{ title: '最新詐騙情報', docs: 'https://docs.rsshub.app/new-media.html#qu-shi-ke-ji-fang-zha-da-ren-zui-xin-zha-pian-qing-bao', source: ['/'], target: '/getdr' }] },
    'sunborngame.com': { _name: '少女前线', '.': [{ title: '情报局', docs: 'https://docs.rsshub.app/game.html#shao-nv-qian-xian-qing-bao-ju', source: ['/:category', '/'], target: '/gf-cn/news/:category?' }] },
    'hbr.org': { _name: 'Harvard Business Review', '.': [{ title: 'Topic', docs: 'https://docs.rsshub.app/new-media.html#harvard-business-review-topic', source: ['/topic/:topic?', '/'], target: '/hbr/topic/:topic?/:type?' }] },
    'hrbeu.edu.cn': {
        _name: '哈尔滨工程大学',
        yjsy: [
            { title: '研究生院 - 通知公告', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/yjsy/announcement' },
            { title: '研究生院 - 新闻动态', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/yjsy/news' },
            { title: '研究生院 - 国家公派项目', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/yjsy/gjgp' },
            { title: '研究生院 - 国际合作与交流项目', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/yjsy/gjhz' },
        ],
        job: [{ title: '就业服务平台 - 通知公告', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/job/tzgg' }],
        uae: [
            { title: '水声学院 - 新闻动态', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/shuisheng/xwdt' },
            { title: '研究生院 - 通知公告', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/shuisheng/tzgg' },
        ],
    },
    'hkej.com': { _name: '信报财经新闻', '.': [{ title: '即时新闻', docs: 'https://docs.rsshub.app/traditional-media.html##xin-bao-cai-jing-xin-wen', source: ['/'], target: '/hkej/:category?' }] },
    'hket.com': {
        _name: '香港经济日报',
        china: [{ title: '新闻', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-jing-ji-ri-bao', source: ['/:category/*'], target: '/hket/:category' }],
        inews: [{ title: '新闻', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-jing-ji-ri-bao', source: ['/:category/*'], target: '/hket/:category' }],
        topick: [{ title: '新闻', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-jing-ji-ri-bao', source: ['/:category/*'], target: '/hket/:category' }],
        wealth: [{ title: '新闻', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-jing-ji-ri-bao', source: ['/:category/*'], target: '/hket/:category' }],
        www: [{ title: '新闻', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-jing-ji-ri-bao', source: ['/'], target: '/hket' }],
    },
    'hkjunkcall.com': { _name: 'HKJunkCall資訊中心', '.': [{ title: '近期資訊', docs: 'https://docs.rsshub.app/new-media.html#hkjunkcall-zi-xun-zhong-xin-jin-qi-zi-xun', source: ['/'], target: '/hkjunkcall' }] },
    'dh.gov.hk': {
        _name: '香港卫生署',
        '.': [
            { title: '新闻公报', docs: 'https://docs.rsshub.app/government.html#xiang-gang-wei-sheng-shu-xin-wen-gong-bao', source: ['/'], target: '/hongkong/dh/:language?' },
            { title: '分类', docs: 'https://docs.rsshub.app/government.html#xiang-gang-wei-sheng-fang-hu-zhong-xin-fen-lei', source: ['/'], target: '/hongkong/chp/:category?/:language?' },
        ],
    },
    'hotchina.news': {
        _name: '辛華社',
        '.': [
            { title: '首页', docs: 'https://docs.rsshub.app/new-media.html#xin-hua-she-shou-ye', source: ['/'], target: '/hotchina' },
            { title: '分类', docs: 'https://docs.rsshub.app/new-media.html#xin-hua-she-fen-lei', source: ['/archives/category/:id', '/'], target: '/hotchina/category/:id?' },
            { title: '标签', docs: 'https://docs.rsshub.app/new-media.html#xin-hua-she-biao-qian', source: ['/archives/tag/:id', '/'], target: '/hotchina/tag/:id?' },
        ],
    },
    'hotukdeals.com': {
        _name: 'hotukdeals',
        www: [
            { title: 'highlights', docs: 'https://docs.rsshub.app/shopping.html#hotukdeals', source: ['/'], target: '/hotukdeals/highlights' },
            { title: 'hot', docs: 'https://docs.rsshub.app/shopping.html#hotukdeals', source: ['/'], target: '/hotukdeals/hot' },
            { title: 'new', docs: 'https://docs.rsshub.app/shopping.html#hotukdeals', source: ['/'], target: '/hotukdeals/new' },
            { title: 'discussed', docs: 'https://docs.rsshub.app/shopping.html#hotukdeals', source: ['/'], target: '/hotukdeals/discussed' },
        ],
    },
    'https://www.icac.org.hk': { _name: '廉政公署', '.': [{ title: '新闻公布', docs: 'https://docs.rsshub.app/government.html#xiang-gang-lian-zheng-gong-shu', source: ['/:lang/press/index.html'], target: '/icac/news/:lang' }] },
    'ieee.org': {
        _name: 'IEEE',
        www: [
            { title: 'latestVolume', docs: 'https://docs.rsshub.app/journal.html#ieee-xplore', source: '/*', target: (params, url) => `/ieee/${new URL(url).searchParams.get('punumber')}/latest/vol` },
            { title: 'latestDate', docs: 'https://docs.rsshub.app/journal.html#ieee-xplore', source: '/*', target: (params, url) => `/ieee/${new URL(url).searchParams.get('punumber')}/latest/date` },
        ],
    },
    'independent.co.uk': {
        _name: 'PS5 stock UK - The Independent',
        www: [{ title: 'News', docs: 'https://docs.rsshub.app/shopping.html#the-independent', source: ['/extras/indybest/gadgets-tech/video-games-consoles/ps5-stock-uk-restock-live-today-b1938965.html'], target: '/ps5-stock-uk' }],
    },
    'ithome.com': {
        _name: 'IT 之家',
        '.': [
            { title: '24 小时阅读榜', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: ['', '/*'], target: '/ithome/ranking/24h' },
            { title: '7 天最热', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: ['', '/*'], target: '/ithome/ranking/7days' },
            { title: '月榜', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: ['', '/*'], target: '/ithome/ranking/monthly' },
        ],
        it: [{ title: 'IT 资讯', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/it' }],
        soft: [{ title: '软件之家', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/soft' }],
        win10: [{ title: 'win10 之家', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/win10' }],
        iphone: [{ title: 'iphone 之家', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/iphone' }],
        ipad: [{ title: 'ipad 之家', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/ipad' }],
        android: [{ title: 'android 之家', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/android' }],
        digi: [{ title: '数码之家', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/digi' }],
        next: [{ title: '智能时代', docs: 'https://docs.rsshub.app/new-media.html#it-zhi-jia', source: '/', target: '/ithome/next' }],
    },
    'scitation.org': {
        _name: 'JASA',
        asa: [
            { title: 'latest', docs: 'https://docs.rsshub.app/journal.html#jasa', source: '/*', target: '/jasa/latest' },
            { title: 'section', docs: 'https://docs.rsshub.app/journal.html#jasa', source: '/*', target: (params, url) => `/jasa/section/${new URL(url).searchParams.get('tocSection')}` },
        ],
    },
    'javdb.com': {
        _name: 'JavDB',
        '.': [
            { title: '主页', docs: 'https://docs.rsshub.app/multimedia.html#javdb-zhu-ye', source: ['/'], target: '/javdb' },
            { title: '分類', docs: 'https://docs.rsshub.app/multimedia.html#javdb-fen-lei', source: ['/tags/:category', '/'], target: (params, url) => `/javdb/tags/:category/${new URL(url).searchParams.toString()}` },
            {
                title: '排行榜',
                docs: 'https://docs.rsshub.app/multimedia.html#javdb-pai-hang-bang',
                source: ['/rankings/:category', '/'],
                target: (params, url) => `/javdb/rankings/:category/${new URL(url).searchParams.get('period') ?? ''}`,
            },
            { title: '搜索', docs: 'https://docs.rsshub.app/multimedia.html#javdb-sou-suo', source: ['/search', '/'], target: (params, url) => `/javdb/search/${new URL(url).searchParams.toString()}` },
            { title: '演員', docs: 'https://docs.rsshub.app/multimedia.html#javdb-yan-yuan', source: ['/actors/:id', '/'], target: (params, url) => `/javdb/actors/:id/${new URL(url).searchParams.toString()}` },
            { title: '系列', docs: 'https://docs.rsshub.app/multimedia.html#javdb-xi-lie', source: ['/series/:id', '/'], target: (params, url) => `/javdb/series/:id/${new URL(url).searchParams.toString()}` },
            { title: '片商', docs: 'https://docs.rsshub.app/multimedia.html#javdb-pian-shang', source: ['/makers/:id', '/'], target: (params, url) => `/javdb/makers/:id/${new URL(url).searchParams.toString()}` },
        ],
    },
    'jisilu.cn': {
        _name: '集思录',
        '.': [
            { title: '广场', docs: 'https://docs.rsshub.app/bbs.html#ji-si-lu-guang-chang', source: ['/home/explore', '/explore', '/'], target: '/jisilu/:category?/:sort?/:day?' },
            { title: '用户回复', docs: 'https://docs.rsshub.app/bbs.html#ji-si-lu-yong-hu-hui-fu', source: ['/people/:user'], target: '/jisilu/reply/:user' },
            { title: '用户主题', docs: 'https://docs.rsshub.app/bbs.html#ji-si-lu-yong-hu-zhu-ti', source: ['/people/:user'], target: '/jisilu/topic/:user' },
        ],
    },
    'jumpvg.com': { _name: 'jump app', switch: [{ title: '折扣清单', docs: 'https://docs.rsshub.app/game.html#jump', source: ['/'], target: '/jump/discount/switch' }] },
    'iyingdi.com': {
        _name: '旅法师营地',
        www: [
            { title: '分区', docs: 'https://docs.rsshub.app/game.html#lv-fa-shi-ying-di', source: '/tz/tag/:tag', target: '/lfsyd/tag/:tag' },
            { title: '用户发帖', docs: 'https://docs.rsshub.app/game.html#lv-fa-shi-ying-di', source: ['/tz/people/:id', '/tz/people/:id/*'], target: '/lfsyd/user/:id' },
        ],
        mob: [{ title: '分区', docs: 'https://docs.rsshub.app/game.html#lv-fa-shi-ying-di', source: '/fine/:tag', target: '/lfsyd/tag/:tag' }],
    },
    'literotica.com': {
        _name: 'Literotica',
        '.': [
            { title: 'New Stories', docs: 'https://docs.rsshub.app/reading.html#literotica-new-stories', source: ['/'], target: '/literotica/new' },
            { title: 'Category', docs: 'https://docs.rsshub.app/reading.html#literotica-category', source: ['/c/:category', '/'], target: '/literotica/category/:category' },
        ],
    },
    'mingpao.com': {
        _name: '明报',
        '.': [
            { title: '即时新闻', docs: 'https://docs.rsshub.app/traditional-media.html#ming-bao', source: ['/'], target: '/mingpao/ins/:type?' },
            { title: '每日明报', docs: 'https://docs.rsshub.app/traditional-media.html#ming-bao', source: ['/'], target: '/mingpao/pns/:type?' },
        ],
    },
    'mpfinance.com': {
        _name: '明报',
        '.': [
            { title: '即时新闻', docs: 'https://docs.rsshub.app/traditional-media.html#ming-bao', source: ['/'], target: '/mingpao/ins/:type?' },
            { title: '每日明报', docs: 'https://docs.rsshub.app/traditional-media.html#ming-bao', source: ['/'], target: '/mingpao/pns/:type?' },
        ],
    },
    'mohw.gov.tw': { _name: '台灣衛生福利部', '.': [{ title: '即時新聞澄清', docs: 'https://docs.rsshub.app/government.html#tai-wan-wei-sheng-fu-li-bu-ji-shi-xin-wen-cheng-qing', source: ['/'], target: '/mohw/clarification' }] },
    'mox.moe': { _name: 'Mox.moe', '.': [{ title: '首頁', docs: 'https://docs.rsshub.app/anime.html#mox-moe-shou-ye', source: ['/l/:category', '/'], target: '/mox/:category?' }] },
    'mwm.net.cn': { _name: '管理世界', '.': [{ title: '分类', docs: 'https://docs.rsshub.app/journal.html#guan-li-shi-jie-fen-lei', source: ['/web/:category', '/'], target: '/mvm/:category?' }] },
    'mydrivers.com': { _name: '快科技', '.': [{ title: '新闻', docs: 'https://docs.rsshub.app/new-media.html#kuai-ke-ji-xin-wen', source: ['/'], target: '/mydrivers/:type?/:id?' }] },
    'mygopen.com': { _name: 'MyGoPen', '.': [{ title: '分類', docs: 'https://docs.rsshub.app/new-media.html#mygopen-fen-lei', source: ['/search/label/:label', '/'], target: '/mygopen/:label?' }] },
    '163.com': {
        _name: '网易',
        ds: [{ title: '大神', docs: 'https://docs.rsshub.app/game.html#wang-yi-da-shen', source: '/user/:id', target: '/netease/ds/:id' }],
        open: [
            { title: '公开课 - 精品课程', docs: 'https://docs.rsshub.app/study.html#wang-yi-gong-kai-ke', source: '/', target: '/open163/vip' },
            { title: '公开课 - 最新课程', docs: 'https://docs.rsshub.app/study.html#wang-yi-gong-kai-ke', source: '/', target: '/open163/latest' },
        ],
        music: [
            {
                title: '云音乐 - 用户歌单',
                docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue',
                source: '/',
                target: (params, url) => {
                    const id = new URL(url).hash.match(/home\?id=(.*)/)[1];
                    return id ? `/ncm/user/playlist/${id}` : '';
                },
            },
            {
                title: '云音乐 - 歌单歌曲',
                docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue',
                source: '/',
                target: (params, url) => {
                    const id = new URL(url).hash.match(/playlist\?id=(.*)/)[1];
                    return id ? `/ncm/playlist/${id}` : '';
                },
            },
            {
                title: '云音乐 - 歌手专辑',
                docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue',
                source: '/',
                target: (params, url) => {
                    const id = new URL(url).hash.match(/album\?id=(.*)/)[1];
                    return id ? `/ncm/artist/${id}` : '';
                },
            },
            {
                title: '云音乐 - 电台节目',
                docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue',
                source: '/',
                target: (params, url) => {
                    const id = new URL(url).hash.match(/djradio\?id=(.*)/)[1];
                    return id ? `/ncm/djradio/${id}` : '';
                },
            },
        ],
        'y.music': [
            { title: '云音乐 - 用户歌单', docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue', source: '/m/user', target: (params, url) => `/ncm/playlist/${new URL(url).searchParams.get('id')}` },
            { title: '云音乐 - 歌单歌曲', docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue', source: '/m/playlist', target: (params, url) => `/ncm/playlist/${new URL(url).searchParams.get('id')}` },
            { title: '云音乐 - 歌手专辑', docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue', source: '/m/album', target: (params, url) => `/ncm/playlist/${new URL(url).searchParams.get('id')}` },
            { title: '云音乐 - 播单声音', docs: 'https://docs.rsshub.app/multimedia.html#wang-yi-yun-yin-yue', source: ['/m/radio', '/m/djradio'], target: (params, url) => `/ncm/playlist/${new URL(url).searchParams.get('id')}` },
        ],
    },
    'news.cn': { _name: '新华网', '.': [{ title: '新华社新闻', docs: 'https://docs.rsshub.app/new-media.html#xin-hua-wang-xin-hua-she-xin-wen', source: ['/'], target: '/news/whxw' }] },
    'newsmarket.com.tw': {
        _name: '上下游News&amp;Market',
        '.': [{ title: '分類', docs: 'https://docs.rsshub.app/new-media.html#shang-xia-you-news-market', source: ['/blog/category/:category', '/'], target: '/newsmarket/:category?' }],
    },
    'ngocn2.org': { _name: 'NGOCN', '.': [{ title: '分类', docs: 'https://docs.rsshub.app/new-media.html#ngocn2-fen-lei', source: ['/'], target: '/ngocn2/:category?' }] },
    'nsfc.gov.cn': {
        _name: '国家自然科学基金委员会',
        www: [
            { title: '基金要闻', docs: 'https://docs.rsshub.app/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui', source: '/*', target: '/nsfc/news/jjyw' },
            { title: '通知公告', docs: 'https://docs.rsshub.app/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui', source: '/*', target: '/nsfc/news/tzgg' },
            { title: '资助成果', docs: 'https://docs.rsshub.app/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui', source: '/*', target: '/nsfc/news/zzcg' },
            { title: '科普快讯', docs: 'https://docs.rsshub.app/other.html#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui', source: '/*', target: '/nsfc/news/kpkx' },
        ],
    },
    'people.com': { _name: '人民网', liuyan: [{ title: '领导留言板', docs: 'https://docs.rsshub.app/traditional-media.html#ren-min-wang-ling-dao-liu-yan-ban', source: '/', target: '/people/liuyan/:id/:state?' }] },
    'pku.edu.cn': { _name: '北京大学', hr: [{ title: '人事处', docs: 'https://docs.rsshub.app/university.html#bei-jing-da-xue-ren-shi-chu', source: ['/'], target: '/pku/hr/:category?' }] },
    'pts.org.tw': { _name: '公視新聞網 PNN', news: [{ title: '即時', docs: 'https://docs.rsshub.app/traditional-media.html#gong-shi-xin-wen-wang-ji-shi-xin-wen', source: ['/dailynews'], target: '/pts/dailynews' }] },
    'qm120.com': { _name: '全民健康网', '.': [{ title: '新闻', docs: 'https://docs.rsshub.app/new-media.html#quan-min-jian-kang-wang-xin-wen', source: ['/'], target: '/qm120/news/:category?' }] },
    'qq.com': {
        _name: '腾讯',
        'mp.weixin': [
            {
                title: '微信公众号栏目',
                docs: 'https://docs.rsshub.app/new-media.html#gong-zhong-hao-lan-mu-fei-tui-song-li-shi-xiao-xi',
                source: '/mp/homepage',
                target: (params, url) => `/wechat/mp/homepage/${new URL(url).searchParams.get('__biz')}/${new URL(url).searchParams.get('hid')}/${new URL(url).searchParams.get('cid') ? new URL(url).searchParams.get('cid') : ''}`,
            },
            {
                title: '微信公众号话题',
                docs: 'https://docs.rsshub.app/new-media.html#wei-xin-gong-zhong-hao-wen-zhang-hua-ti-tag',
                source: '/mp/appmsgalbum',
                target: (params, url) => `/wechat/mp/msgalbum/${new URL(url).searchParams.get('__biz')}/${new URL(url).searchParams.get('album_id')}`,
            },
        ],
        egame: [
            {
                title: '企鹅电竞直播间',
                docs: 'https://docs.rsshub.app/live.html#qi-e-dian-jing-zhi-bo-jian-kai-bo',
                source: '/:id',
                target: (params) => {
                    if (params.id.match(/^\d+$/)) {
                        return '/egameqq/room/:id';
                    }
                },
            },
        ],
        v: [
            {
                title: '视频 - 播放列表',
                docs: 'https://docs.rsshub.app/multimedia.html#teng-xun-shi-pin',
                source: '/x/cover/:id',
                target: (params) => {
                    const id = params.id.match('(.*).html')[1];
                    return id ? `/tencentvideo/playlist/${id}` : '';
                },
            },
            { title: '视频 - 播放列表', docs: 'https://docs.rsshub.app/multimedia.html#teng-xun-shi-pin', source: '/x/cover/:id/:detail', target: '/tencentvideo/playlist/:id' },
        ],
    },
    'rfi.fr': { _name: '法国国际广播电台', '.': [{ title: '滚动新闻', docs: 'https://docs.rsshub.app/multimedia.html#fa-guo-guo-ji-guang-bo-dian-tai-gun-dong-xin-wen', source: ['/'], target: '/rfi/news' }] },
    'ruancan.com': {
        _name: '软餐',
        '.': [
            { title: '首页', docs: 'https://docs.rsshub.app/new-media.html#ruan-can-shou-ye', source: ['/'], target: '/ruancan' },
            { title: '分类', docs: 'https://docs.rsshub.app/new-media.html#ruan-can-fen-lei', source: ['/sort/:sort', '/'], target: '/ruancan/sort/:sort' },
            { title: '标签', docs: 'https://docs.rsshub.app/new-media.html#ruan-can-biao-qian', source: ['/tag/:tag', '/'], target: '/ruancan/tag/:tag' },
        ],
    },
    'ruc.edu.cn': { _name: '中国人民大学', hr: [{ title: '人事处', docs: 'https://docs.rsshub.app/university.html#zhong-guo-ren-min-da-xue-ren-shi-chu', source: ['/'], target: '/ruc/hr/:category?' }] },
    'shopback.com.tw': { _name: 'ShopBack', '.': [{ title: 'Store', docs: 'https://docs.rsshub.app/shopping.html#shopback-store', source: ['/:category', '/'], target: '/shopback/:store' }] },
    'sicau.edu.cn': { _name: '', dky: [{ title: '招生就业', docs: 'https://docs.rsshub.app/university.html#si-chuan-nong-ye-da-xue-zhao-sheng-jiu-ye', source: ['/'], target: '/sicau/zsjy/:category?' }] },
    'solidot.org': {
        _name: 'Solidot',
        www: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/www' }],
        linux: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/linux' }],
        science: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/science' }],
        technology: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/technology' }],
        mobile: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/mobile' }],
        apple: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/apple' }],
        hardware: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/hardware' }],
        software: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/software' }],
        security: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/security' }],
        games: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/games' }],
        books: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/books' }],
        idle: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/idle' }],
        cloud: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/cloud' }],
        story: [{ title: '最新消息', docs: 'https://docs.rsshub.app/traditional-media.html#solidot', source: ['/'], target: '/solidot/story' }],
    },
    'startuplatte.com': { _name: '創新拿鐵', '.': [{ title: '分类', docs: 'https://docs.rsshub.app/new-media.html#chuang-xin-na-tie-fen-lei', source: ['/category/:category', '/'], target: '/startuplatte/:category?' }] },
    'subhd.tv': {
        _name: 'Sub HD',
        '.': [
            { title: '字幕', docs: 'https://docs.rsshub.app/multimedia.html#subhd-zi-mu', source: ['/sub/:category', '/'], target: '/subhd/sub/:category?' },
            { title: '字幕组', docs: 'https://docs.rsshub.app/multimedia.html#subhd-zi-mu-zu', source: ['/zu/:category', '/'], target: '/subhd/zu/:category?' },
        ],
    },
    'swissinfo.ch': { _name: 'swissinfo', '.': [{ title: 'Category', docs: 'https://docs.rsshub.app/new-media.html#swissinfo-category', source: ['/:language/:category', '/'], target: '/swissinfo/:language?/:category?' }] },
    'szse.cn': { _name: '深圳证券交易所', '.': [{ title: '最新规则', docs: 'https://docs.rsshub.app/other.html#shen-zhen-zheng-quan-jiao-yi-suo-zui-xin-gui-ze', source: ['/lawrules/rule/new', '/'], target: '/szse/rule' }] },
    'timednews.com': {
        _name: '时刻新闻',
        '.': [
            {
                title: '新闻',
                docs: 'https://docs.rsshub.app/new-media.html#shi-ke-xin-wen',
                source: ['/topic/:type/:id'],
                target: ({ type, id }) => {
                    let name = '';
                    if (type === 'cat') {
                        if (id === '1') {
                            name = 'all';
                        }
                    } else if (type === 'subcat') {
                        switch (id) {
                            case '1':
                                name = 'currentAffairs';
                                break;
                            case '2':
                                name = 'finance';
                                break;
                            case '3':
                                name = 'technology';
                                break;
                            case '4':
                                name = 'social';
                                break;
                            case '5':
                                name = 'sports';
                                break;
                            case '6':
                                name = 'international';
                                break;
                            case '7':
                                name = 'usa';
                                break;
                            case '8':
                                name = 'cn';
                                break;
                            case '9':
                                name = 'europe';
                                break;
                            case '14':
                                name = 'comments';
                                break;
                            default:
                                break;
                        }
                    }

                    return `/timednews/news/${name}`;
                },
            },
        ],
    },
    'trow.cc': { _name: 'The Ring of Wonder', '.': [{ title: '首页更新', docs: 'https://docs.rsshub.app/bbs.html#the-ring-of-wonder', source: ['/'], target: '/portal' }] },
    'uibe.edu.cn': {
        _name: '对外经济贸易大学',
        hr: [{ title: '人力资源处', docs: 'https://docs.rsshub.app/university.html#dui-wai-jing-ji-mao-yi-da-xue-ren-li-zi-yuan-chu', source: ['/:category/:type', '/:category', '/'], target: '/uibe/hr/:category?/:type?' }],
    },
    'wangqiutiyu.com': { _name: '旺球体育', '.': [{ title: '直播间开播', docs: 'https://docs.rsshub.app/live.html#wang-qiu-ti-yu-zhi-bo-jian-kai-bo', source: ['/anchor/:id', '/'], target: '/wangqiutiyu/anchor/:id' }] },
    'watchout.tw': { _name: '沃草', '.': [{ title: '文件列表', docs: 'https://docs.rsshub.app/new-media.html#wo-cao-wen-jian-lie-biao', source: ['/'], target: '/watchout' }] },
    'feeddd.org': { _name: 'Feeddd', api: [{ title: '订阅 Feed', source: ['/feeds/:id'], target: '/wechat/feeddd/:id' }] },
    'wsyu.edu.cn': {
        _name: '新闻中心',
        www: [
            { title: '学校要闻', docs: 'https://docs.rsshub.app/other.html#wu-chang-shou-yi-xue-yuan', source: '/*', target: '/wsyu/news/xxyw' },
            { title: '综合新闻', docs: 'https://docs.rsshub.app/other.html#wu-chang-shou-yi-xue-yuan', source: '/*', target: '/wsyu/news/zhxw' },
            { title: '媒体聚焦', docs: 'https://docs.rsshub.app/other.html#wu-chang-shou-yi-xue-yuan', source: '/*', target: '/wsyu/news/mtjj' },
        ],
    },
    'wzu.edu.cn': { _name: '温州大学', '.': [{ title: '温州大学 - 主站新闻', docs: 'https://docs.rsshub.app/university.html#wen-zhou-da-xue' }] },
    'yaohuo.me': { _name: '妖火', '.': [{ title: '首页', docs: 'https://docs.rsshub.app/new-media.html#yao-huo-shou-ye', source: ['/'], target: '/yaohuo' }] },
    'bilibili.com': {
        _name: 'bilibili',
        www: [
            { title: '分区视频', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: ['/v/*tpath', '/documentary', '/movie', '/tv'] },
            { title: '视频评论', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/video/:aid', target: (params) => `/bilibili/video/reply/${params.aid.replace('av', '')}` },
            {
                title: '视频弹幕',
                docs: 'https://docs.rsshub.app/social-media.html#bilibili',
                source: '/video/:aid',
                target: (params, url) => {
                    const pid = new URL(url).searchParams.get('p');
                    return `/bilibili/video/danmaku/${params.aid.replace('av', '')}/${pid ? pid : 1}`;
                },
            },
            { title: '番剧', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/bangumi/media/:bid', target: (params) => `/bilibili/bangumi/media/${params.bid.replace('md', '')}` },
        ],
        space: [
            { title: 'UP 主动态', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/dynamic/:uid' },
            { title: 'UP 主投稿', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/video/:uid' },
            { title: 'UP 主专栏', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/article/:uid' },
            { title: 'UP 主默认收藏夹', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/fav/:uid' },
            { title: 'UP 主投币视频', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/coin/:uid' },
            { title: 'UP 主粉丝', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/followers/:uid' },
            { title: 'UP 主关注用户', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/followings/:uid' },
            { title: '用户追番列表', docs: 'https://docs.rsshub.app/social-media.html#bilibili', source: '/:uid', target: '/bilibili/user/bangumi/:uid' },
        ],
        manga: [{ title: '漫画更新', docs: 'https://docs.rsshub.app/social-media.html#bilibili-man-hua-geng-xin', source: '/detail/:comicid', target: '/bilibili/manga/update/:comicid' }],
    },
    'weibo.com': {
        _name: '微博',
        '.': [
            {
                title: '博主',
                docs: 'https://docs.rsshub.app/social-media.html#wei-bo',
                source: ['/u/:id', '/:id'],
                target: (params, url, document) => {
                    let uid = document?.documentElement.innerHTML.match(/\$CONFIG\['oid']='(\d+)'/)?.[1];
                    if (!uid && !isNaN(params.id)) {
                        uid = params.id;
                    }
                    return uid ? `/weibo/user/${uid}` : '';
                },
            },
            { title: '关键词', docs: 'https://docs.rsshub.app/social-media.html#wei-bo' },
            { title: '超话', docs: 'https://docs.rsshub.app/social-media.html#wei-bo', source: '/p/:id/super_index', target: '/weibo/super_index/:id' },
        ],
        s: [{ title: '热搜榜', docs: 'https://docs.rsshub.app/social-media.html#wei-bo', source: '/top/summary', target: '/weibo/search/hot' }],
    },
    'weibo.cn': { _name: '微博', m: [{ title: '博主', docs: 'https://docs.rsshub.app/social-media.html#wei-bo', source: ['/u/:uid', '/profile/:uid'], target: '/weibo/user/:uid' }] },
    'pixiv.net': {
        _name: 'Pixiv',
        www: [
            { title: '用户收藏', docs: 'https://docs.rsshub.app/social-media.html#pixiv', source: '/users/:id/bookmarks/artworks', target: '/pixiv/user/bookmarks/:id' },
            { title: '用户动态', docs: 'https://docs.rsshub.app/social-media.html#pixiv', source: '/users/:id', target: '/pixiv/user/:id' },
            { title: '排行榜', docs: 'https://docs.rsshub.app/social-media.html#pixiv', source: '/ranking.php', target: (params, url) => `/pixiv/ranking/${new URL(url).searchParams.get('mode') || 'daily'}` },
            {
                title: '关键词',
                docs: 'https://docs.rsshub.app/social-media.html#pixiv',
                source: ['/tags/:keyword', '/tags/:keyword/:type?'],
                target: (params, url) => `/pixiv/search/:keyword/${new URL(url).searchParams.get('order')}/${new URL(url).searchParams.get('mode')}`,
            },
            { title: '关注的新作品', docs: 'https://docs.rsshub.app/social-media.html#pixiv', source: '/bookmark_new_illust.php', target: '/pixiv/user/illustfollows' },
        ],
    },
    'twitter.com': {
        _name: 'Twitter',
        '.': [
            {
                title: '用户时间线',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/user/:id';
                    }
                },
            },
            {
                title: '用户关注时间线',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/followings/:id';
                    }
                },
            },
            {
                title: '用户喜欢列表',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/likes/:id';
                    }
                },
            },
            {
                title: '列表时间线',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id/lists/:name',
                target: (params) => {
                    if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                        return '/twitter/list/:id/:name';
                    }
                },
            },
            { title: '关键词', docs: 'https://docs.rsshub.app/social-media.html#twitter', source: '/search', target: (params, url) => `/twitter/keyword/${new URL(url).searchParams.get('q')}` },
        ],
    },
    'youtube.com': {
        _name: 'YouTube',
        www: [
            { title: '用户', docs: 'https://docs.rsshub.app/social-media.html#youtube', source: '/user/:username', target: '/youtube/user/:username' },
            { title: '频道', docs: 'https://docs.rsshub.app/social-media.html#youtube', source: '/channel/:id', target: '/youtube/channel/:id' },
            { title: '播放列表', docs: 'https://docs.rsshub.app/social-media.html#youtube', source: '/playlist', target: (params, url) => `/youtube/playlist/${new URL(url).searchParams.get('list')}` },
        ],
    },
    'github.com': {
        _name: 'GitHub',
        '.': [
            { title: '用户仓库', docs: 'https://docs.rsshub.app/programming.html#github', source: '/:user', target: '/github/repos/:user' },
            { title: '用户 Followers', docs: 'https://docs.rsshub.app/programming.html#github', source: '/:user', target: '/github/user/followers/:user' },
            { title: 'Trending', docs: 'https://docs.rsshub.app/programming.html#github', source: '/trending', target: '/github/trending/:since' },
            { title: 'Trending', docs: 'https://docs.rsshub.app/programming.html#github', source: '/topics', target: '/github/topics/:name/:qs?' },
            { title: '仓库 Issue', docs: 'https://docs.rsshub.app/programming.html#github', source: ['/:user/:repo/issues', '/:user/:repo/issues/:id', '/:user/:repo'], target: '/github/issue/:user/:repo' },
            { title: '仓库 Pull Requests', docs: 'https://docs.rsshub.app/programming.html#github', source: ['/:user/:repo/pulls', '/:user/:repo/pulls/:id', '/:user/:repo'], target: '/github/pull/:user/:repo' },
            { title: '仓库 Stars', docs: 'https://docs.rsshub.app/programming.html#github', source: ['/:user/:repo/stargazers', '/:user/:repo'], target: '/github/stars/:user/:repo' },
            { title: '仓库 Branches', docs: 'https://docs.rsshub.app/programming.html#github', source: ['/:user/:repo/branches', '/:user/:repo'], target: '/github/branches/:user/:repo' },
            { title: '文件 Commits', docs: 'https://docs.rsshub.app/programming.html#github', source: '/:user/:repo/blob/:branch/*filepath', target: '/github/file/:user/:repo/:branch/:filepath' },
            { title: '用户 Starred Repositories', docs: 'https://docs.rsshub.app/programming.html#github', source: '/:user', target: '/github/starred_repos/:user' },
            { title: '仓库 Contributors', docs: 'https://docs.rsshub.app/programming.html#github', source: ['/:user/:repo/graphs/contributors', '/:user/:repo'], target: '/github/contributors/:user/:repo' },
        ],
    },
    'zhihu.com': {
        _name: '知乎',
        www: [
            { title: '收藏夹', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/collection/:id', target: '/zhihu/collection/:id' },
            { title: '用户动态', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/people/:id', target: '/zhihu/people/activities/:id' },
            { title: '用户回答', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/people/:id/answers', target: '/zhihu/people/answers/:id' },
            { title: '用户想法', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/people/:id/pins', target: '/zhihu/people/pins/:id' },
            { title: '用户文章', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/:usertype/:id/posts', target: '/zhihu/posts/:usertype/:id' },
            { title: '热榜', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/hot', target: '/zhihu/hotlist' },
            { title: '想法热榜', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', target: '/zhihu/pin/hotlist' },
            { title: '问题', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/question/:questionId', target: '/zhihu/question/:questionId' },
            { title: '话题', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/topic/:topicId/:type', target: '/zhihu/topic/:topicId' },
            { title: '新书', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/zhihu/bookstore/newest', target: '/zhihu/pin/hotlist' },
            { title: '想法-24 小时新闻汇总', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/pin/special/972884951192113152', target: '/zhihu/pin/daily' },
            { title: '书店-周刊', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/pub/weekly', target: '/zhihu/weekly' },
            { title: '专栏', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/column/:id', target: '/zhihu/zhuanlan/:id' },
        ],
        zhuanlan: [{ title: '专栏', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/:id', target: '/zhihu/zhuanlan/:id' }],
        daily: [
            { title: '日报', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '', target: '/zhihu/daily' },
            { title: '日报', docs: 'https://docs.rsshub.app/social-media.html#zhi-hu', source: '/*tpath', target: '/zhihu/daily' },
        ],
    },
    'smzdm.com': {
        _name: '什么值得买',
        www: [{ title: '排行榜', docs: 'https://docs.rsshub.app/shopping.html#shen-me-zhi-de-mai', source: '/top' }],
        search: [{ title: '关键词', docs: 'https://docs.rsshub.app/shopping.html#shen-me-zhi-de-mai', source: '/', target: (params, url) => `/smzdm/keyword/${new URL(url).searchParams.get('s')}` }],
    },
    'rsshub.app': {
        _name: 'RSSHub',
        docs: [
            { title: '有新路由啦', docs: 'https://docs.rsshub.app/program-update.html#rsshub', source: ['', '/*tpath'], target: '/rsshub/routes' },
            { title: '有新赞助商啦', docs: 'https://docs.rsshub.app/program-update.html#rsshub', source: ['', '/*tpath'], target: '/rsshub/sponsors' },
        ],
    },
    'ximalaya.com': {
        _name: '喜马拉雅',
        '.': [
            {
                title: '专辑',
                docs: 'https://docs.rsshub.app/multimedia.html#xi-ma-la-ya',
                source: '/:type/:id',
                target: (params) => {
                    if (parseInt(params.id) + '' === params.id) {
                        return '/ximalaya/:type/:id/';
                    }
                },
            },
        ],
    },
    'algocasts.io': { _name: 'AlgoCasts', '.': [{ title: '视频更新', docs: 'https://docs.rsshub.app/programming.html#algocasts', source: '/episodes', target: '/algocasts' }] },
    'soulapp.cn': { _name: 'Soul', '.': [{ title: '瞬间更新', docs: 'https://docs.rsshub.app/social-media.html#soul' }] },
    'juejin.cn': {
        _name: '掘金',
        '.': [
            { title: '标签', docs: 'https://docs.rsshub.app/programming.html#jue-jin-biao-qian', source: '/tag/:tag', target: '/juejin/tag/:tag' },
            { title: '小册', docs: 'https://docs.rsshub.app/programming.html#jue-jin-xiao-ce', source: '/books', target: '/juejin/books' },
            {
                title: '沸点',
                docs: 'https://docs.rsshub.app/programming.html#jue-jin-fei-dian',
                source: ['/pins/:type', '/pins/topic/:type'],
                target: (params) => (params.type !== 'recommended' ? '/juejin/pins/:type' : '/juejin/pins'),
            },
            { title: '专栏', docs: 'https://docs.rsshub.app/programming.html#jue-jin-zhuan-lan', source: ['/user/:id', '/user/:id/posts'], target: '/juejin/posts/:id' },
            { title: '收藏集', docs: 'https://docs.rsshub.app/programming.html#jue-jin-shou-cang-ji', source: ['/user/:id', '/user/:id/collections'], target: '/juejin/collections/:id' },
            { title: '单个收藏夹', docs: 'https://docs.rsshub.app/programming.html#jue-jin-dan-ge-shou-cang-jia', source: '/collection/:collectionId', target: '/juejin/collection/:collectionId' },
        ],
    },
    'anime1.me': {
        _name: 'Anime1',
        '.': [
            { title: '動畫', docs: 'https://docs.rsshub.app/anime.html#anime1', source: '/category/:time/:name', target: '/anime1/anime/:time/:name' },
            {
                title: '搜尋',
                docs: 'https://docs.rsshub.app/anime.html#anime1',
                source: '/',
                target: (params, url) => {
                    const keyword = new URL(url).searchParams.get('s');
                    return keyword ? `/anime1/search/${keyword}` : '';
                },
            },
        ],
    },
    'swufe.edu.cn': {
        _name: '西南财经大学',
        it: [
            { title: '经济信息工程学院 - 通知公告', docs: 'https://docs.rsshub.app/university.html#xi-nan-cai-jing-da-xue', source: '/index/tzgg.htm', target: '/swufe/seie/tzgg' },
            { title: '经济信息工程学院 - 学院新闻', docs: 'https://docs.rsshub.app/university.html#xi-nan-cai-jing-da-xue', source: '/index/xyxw.htm', target: '/swufe/seie/xyxw' },
        ],
    },
    'ishuhui.com': { _name: '鼠绘漫画', www: [{ title: '鼠绘漫画', docs: 'https://docs.rsshub.app/anime.html#shu-hui-man-hua', source: '/comics/anime/:id', target: '/shuhui/comics/:id' }] },
    'www.chicagotribune.com': { _name: 'Chicago Tribune', www: [{ title: 'Chicago Tribune', docs: 'https://docs.rsshub.app/traditional_media.html#chicago-tribune', source: '/' }] },
    'haimaoba.com': { _name: '海猫吧', www: [{ title: '漫画更新', docs: 'https://docs.rsshub.app/anime.html#hai-mao-ba', source: '/catalog/:id', target: '/haimaoba/:id' }] },
    'manhuagui.com': { _name: '漫画柜', www: [{ title: '漫画更新', docs: 'https://docs.rsshub.app/anime.html#kan-man-hua', source: '/comic/:id/', target: '/manhuagui/comic/:id' }] },
    'mhgui.com': { _name: '漫画柜镜像站', www: [{ title: '漫画更新', docs: 'https://docs.rsshub.app/anime.html#kan-man-hua-jing-xiang-zhan', source: '/comic/:id/', target: '/mhgui/comic/:id' }] },
    'tw.manhuagui.com': { _name: '漫画柜台湾', www: [{ title: '漫画更新', docs: 'https://docs.rsshub.app/anime.html#kan-man-hua-tai-wan', source: '/comic/:id/', target: '/twmanhuagui/comic/:id' }] },
    'pgyer.com': { _name: '蒲公英应用分发', www: [{ title: 'app更新', docs: 'https://docs.rsshub.app/program-update.html#pu-gong-ying-ying-yong-fen-fa', source: '/:app', target: '/pgyer/:app' }] },
    'pianyuan.la': { _name: '片源网', '.': [{ title: '电影和剧集', docs: 'https://docs.rsshub.app/multimedia.html#pian-yuan', source: '/' }] },
    'sspai.com': {
        _name: '少数派',
        '.': [
            { title: '最新上架付费专栏', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/series', target: '/sspai/series' },
            { title: 'Matrix', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/matrix', target: '/sspai/matrix' },
            { title: '专栏', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/column/:id', target: '/sspai/column/:id' },
            { title: '作者动态', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/u/:id/updates', target: '/sspai/activity/:id' },
            { title: '作者已发布文章', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/u/:id/posts', target: '/sspai/author/:id' },
            { title: '专题', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/topics', target: '/sspai/topics' },
            { title: '专题内文章更新', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/topic/:id', target: '/sspai/topic/:id' },
            { title: '标签订阅', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: '/tag/:keyword', target: '/sspai/tag/:keyword' },
        ],
        shortcuts: [{ title: 'Shortcuts Gallery', docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai', source: ['', '/*tpath'], target: '/sspai/shortcuts' }],
    },
    'baidu.com': {
        _name: '贴吧',
        tieba: [
            {
                title: '帖子列表',
                docs: 'https://docs.rsshub.app/bbs.html#tie-ba',
                source: 'f',
                target: (params, url) => {
                    const type = new URL(url).searchParams.get('tab');
                    if (!type || type === 'main') {
                        return `/tieba/forum/${new URL(url).searchParams.get('kw')}`;
                    }
                },
            },
            {
                title: '精品帖子',
                docs: 'https://docs.rsshub.app/bbs.html#tie-ba',
                source: 'f',
                target: (params, url) => {
                    const type = new URL(url).searchParams.get('tab');
                    if (type === 'good') {
                        return `/tieba/forum/good/${new URL(url).searchParams.get('kw')}`;
                    }
                },
            },
            { title: '帖子动态', docs: 'https://docs.rsshub.app/bbs.html#tie-ba', source: '/p/:id', target: '/tieba/post/:id' },
            { title: '只看楼主', docs: 'https://docs.rsshub.app/bbs.html#tie-ba', source: '/p/:id', target: '/tieba/post/lz/:id' },
            {
                title: '用户帖子',
                docs: 'https://docs.rsshub.app/bbs.html#tie-ba',
                source: '/home/main',
                target: (params, url) => {
                    const uid = new URL(url).searchParams.get('un');
                    if (uid) {
                        return `/tieba/user/${uid}`;
                    }
                },
            },
        ],
    },
    'wineyun.com': { _name: '酒云网', www: [{ title: '最新商品', docs: 'https://docs.rsshub.app/other.html#jiu-yun-wang', source: ['/:category'], target: '/wineyun/:category' }] },
    'epicgames.com': { _name: 'Epic Games', www: [{ title: '每周免费游戏', docs: 'https://docs.rsshub.app/game.html#epicgames-freegame', source: '/store/zh-CN/free-games', target: '/epicgames/freegames' }] },
    'docker.com': {
        _name: 'Docker',
        hub: [
            {
                title: '镜像有新 Build',
                docs: 'https://docs.rsshub.app/program-update.html#docker-hub',
                source: ['/r/:owner/:image', '/r/:owner/:image/tags', '/_/:image'],
                target: (params) => `/dockerhub/build/${params.owner ? params.owner : 'library'}/${params.image}`,
            },
        ],
    },
    'nga.cn': {
        _name: 'NGA',
        bbs: [
            { title: '分区帖子', docs: 'https://docs.rsshub.app/bbs.html#nga', source: '/thread.php', target: (params, url) => new URL(url).searchParams.get('fid') && `/nga/forum/${new URL(url).searchParams.get('fid')}` },
            { title: '帖子', docs: 'https://docs.rsshub.app/bbs.html#nga', source: '/read.php', target: (params, url) => new URL(url).searchParams.get('tid') && `/nga/post/${new URL(url).searchParams.get('tid')}` },
        ],
    },
    'playstation.com': {
        _name: 'PlayStation',
        store: [
            { title: '游戏列表', docs: 'https://docs.rsshub.app/game.html#playstation', source: '/zh-hans-hk/grid/:id/:page', target: '/ps/list/:id' },
            { title: '折扣|价格', docs: 'https://docs.rsshub.app/game.html#playstation', source: ['/:lang/product/:gridName'], target: '/ps/:lang/product/:gridName' },
        ],
        www: [
            { title: '用户奖杯', docs: 'https://docs.rsshub.app/game.html#playstation' },
            { title: '系统更新纪录', docs: 'https://docs.rsshub.app/game.html#playstation' },
        ],
    },
    'monsterhunter.com': {
        _name: '怪物猎人世界',
        www: [
            { title: '更新情报', docs: 'https://docs.rsshub.app/game.html#guai-wu-lie-ren-shi-jie', source: ['', '/*tpath'], target: '/mhw/update' },
            { title: '最新消息', docs: 'https://docs.rsshub.app/game.html#guai-wu-lie-ren-shi-jie', source: ['', '/*tpath'], target: '/mhw/news' },
        ],
    },
    'vgtime.com': {
        _name: '游戏时光',
        www: [
            { title: '新闻', docs: 'https://docs.rsshub.app/game.html#you-xi-shi-guang', source: '/topic/index.jhtml', target: '/vgtime/news' },
            { title: '游戏发售表', docs: 'https://docs.rsshub.app/game.html#you-xi-shi-guang', source: '/game/release.jhtml', target: '/vgtime/release' },
            { title: '关键词资讯', docs: 'https://docs.rsshub.app/game.html#you-xi-shi-guang', source: '/search/list.jhtml', target: (params, url) => `/vgtime/keyword/${new URL(url).searchParams.get('keyword')}` },
        ],
    },
    'bing.com': { _name: 'Bing', www: [{ title: '每日壁纸', docs: 'https://docs.rsshub.app/picture.html#bing-bi-zhi', source: '', target: '/bing' }] },
    'dcard.tw': {
        _name: 'Dcard',
        www: [
            { title: '首頁帖子-最新', docs: 'https://docs.rsshub.app/bbs.html#dcard', source: '/f', target: '/dcard/posts/latest' },
            { title: '首頁帖子-熱門', docs: 'https://docs.rsshub.app/bbs.html#dcard', source: '/f', target: '/dcard/posts/popular' },
            { title: '板塊帖子-最新', docs: 'https://docs.rsshub.app/bbs.html#dcard', source: '/f/:section', target: '/dcard/:section/latest' },
            { title: '板塊帖子-熱門', docs: 'https://docs.rsshub.app/bbs.html#dcard', source: '/f/:section', target: '/dcard/:section/popular' },
        ],
    },
    'wegene.com': {
        _name: 'WeGene',
        www: [
            { title: '最近更新', docs: 'https://docs.rsshub.app/other.html#wegene', source: '', target: '/wegene/newest' },
            { title: '栏目', docs: 'https://docs.rsshub.app/other.html#wegene', source: '/crowdsourcing', target: '/wegene/column/all/all' },
        ],
    },
    'qdaily.com': {
        _name: '好奇心日报',
        www: [
            { title: '标签', docs: 'https://docs.rsshub.app/new-media.html#hao-qi-xin-ri-bao', source: '/tags/:idd', target: (params) => `/qdaily/tag/${params.idd.replace('.html', '')}` },
            { title: '栏目', docs: 'https://docs.rsshub.app/new-media.html#hao-qi-xin-ri-bao', source: '/special_columns/:idd', target: (params) => `/qdaily/column/${params.idd.replace('.html', '')}` },
            { title: '分类', docs: 'https://docs.rsshub.app/new-media.html#hao-qi-xin-ri-bao', source: '/categories/:idd', target: (params) => `/qdaily/category/${params.idd.replace('.html', '')}` },
        ],
    },
    '3ycy.com': { _name: '三界异次元', www: [{ title: '最近更新', docs: 'https://docs.rsshub.app/anime.html#san-jie-yi-ci-yuan', source: '/', target: '/3ycy/home' }] },
    'emi-nitta.net': {
        _name: 'Emi Nitta',
        '.': [
            { title: '最近更新', docs: 'https://docs.rsshub.app/other.html#xin-tian-hui-hai-guan-fang-wang-zhan', source: '/updates', target: '/emi-nitta/updates' },
            { title: '新闻', docs: 'https://docs.rsshub.app/other.html#xin-tian-hui-hai-guan-fang-wang-zhan', source: '/contents/news', target: '/emi-nitta/news' },
        ],
    },
    'alter-shanghai.cn': { _name: 'Alter', '.': [{ title: '新闻', docs: 'https://docs.rsshub.app/shopping.html#alter-zhong-guo', source: '/cn/news.html', target: '/alter-cn/news' }] },
    'itslide.com': { _name: 'ITSlide', www: [{ title: '最新', docs: 'https://docs.rsshub.app/programming.html#itslide', source: '/*', target: '/itslide/new' }] },
    'leboncoin.fr': { _name: 'leboncoin', www: [{ title: 'ads', docs: 'https://docs.rsshub.app/en/shopping.html#leboncoin', source: '/recherche', target: (params, url) => '/leboncoin/ad/' + url.split('?')[1] }] },
    'yuancheng.work': {
        _name: '远程.work',
        '.': [
            {
                title: '招聘信息',
                docs: 'https://docs.rsshub.app/other.html#yuan-cheng-work',
                source: '/:caty',
                target: (params, url) => {
                    if (!url) {
                        return '/remote-work';
                    }
                    return '/remote-work/' + /\w+-(\w+)-\w+/.exec(url)[1];
                },
            },
        ],
    },
    'chinatimes.com': { _name: '中時電子報', www: [{ title: '新聞', docs: 'https://docs.rsshub.app/traditional-media.html#zhong-shi-dian-zi-bao', source: '/:caty', target: (params) => '/chinatimes/' + params.caty }] },
    'govopendata.com': { _name: '新闻联播文字版', cn: [{ title: '新闻联播文字版', docs: 'https://docs.rsshub.app/traditional-media.html#xin-wen-lian-bo-wen-zi-ban', source: '/xinwenlianbo', target: '/xinwenlianbo/index' }] },
    'steampowered.com': { _name: 'Steam', store: [{ title: 'search', docs: 'https://docs.rsshub.app/game.html#steam', source: '/search/', target: (params, url) => `/steam/search/${new URL(url).searchParams}` }] },
    'baijingapp.com': { _name: '白鲸出海', www: [{ title: '文章', docs: 'https://docs.rsshub.app/new-media.html#bai-jing-chu-hai', source: '', target: '/baijing' }] },
    'xiaomi.cn': { _name: '小米社区', www: [{ title: '圈子', docs: 'https://docs.rsshub.app/bbs.html#xiao-mi-she-qu', source: '/board/:boardId', target: '/mi/bbs/board/:boardId' }] },
    'suzhou.gov.cn': { _name: '苏州市政府', www: [{ title: '政府新闻', docs: 'https://docs.rsshub.app/government.html#su-zhou-shi-ren-min-zheng-fu', source: '/szsrmzf/:uid/nav_list.shtml', target: '/gov/suzhou/news/:uid' }] },
    'mqube.net': {
        _name: 'MQube',
        www: [
            { title: '全站最近更新', docs: 'https://docs.rsshub.app/multimedia.html#mqube', source: '/', target: '/mqube/latest' },
            { title: '全站每日排行', docs: 'https://docs.rsshub.app/multimedia.html#mqube', source: '/', target: '/mqube/top' },
            { title: '个人最近更新', docs: 'https://docs.rsshub.app/multimedia.html#mqube', source: '/user/:user', target: '/mqube/user/:user' },
            { title: '标签最近更新', docs: 'https://docs.rsshub.app/multimedia.html#mqube', source: '/search/tag/:tag', target: '/mqube/tag/:tag' },
        ],
    },
    'nikkei.com': { _name: '日本経済新聞', www: [{ title: 'ホームページ', docs: 'https://docs.rsshub.app/traditional-media.html#ri-ben-jing-ji-xin-wen', source: '/', target: '/nikkei/index' }] },
    'last.fm': {
        _name: 'Last.fm',
        www: [
            { title: '用户播放记录', docs: 'https://docs.rsshub.app/multimedia.html#last-fm', source: ['/user/:user', '/user/:user/*'], target: '/lastfm/recent/:user' },
            { title: '用户 Love 记录', docs: 'https://docs.rsshub.app/multimedia.html#last-fm', source: ['/user/:user', '/user/:user/*'], target: '/lastfm/loved/:user' },
            { title: '站内 Top 榜单', docs: 'https://docs.rsshub.app/multimedia.html#last-fm', source: '/charts', target: '/lastfm/top' },
        ],
    },
    'ddrk.me': {
        _name: '低端影视',
        www: [
            { title: '首页', docs: 'https://docs.rsshub.app/multimedia.html#di-duan-ying-shi', source: '/', target: '/ddrk/index' },
            { title: '标签', docs: 'https://docs.rsshub.app/multimedia.html#di-duan-ying-shi', source: '/tag/:tag', target: '/ddrk/tag/:tag' },
            { title: '分类', docs: 'https://docs.rsshub.app/multimedia.html#di-duan-ying-shi', source: ['/category/:category', '/category/:uplevel/:category'], target: '/ddrk/category/:category' },
            {
                title: '影视剧集更新',
                docs: 'https://docs.rsshub.app/multimedia.html#di-duan-ying-shi',
                source: ['/:name', '/:name/:season'],
                target: (params) => {
                    if (params.name !== 'category' && params.name !== 'tag' && params.name !== 'ddrklogin' && params.name !== 'about' && params.name !== 'deleted') {
                        return `/ddrk/update/${params.name}${params.season ? '/' + params.season : ''}`;
                    }
                },
            },
        ],
    },
    'google.com': {
        _name: '谷歌',
        chrome: [{ title: '插件更新', source: '/webstore/detail/:name/:id', docs: 'https://docs.rsshub.app/program-update.html#chrome-wang-shang-ying-yong-dian', target: '/chrome/webstore/extensions/:id' }],
        photos: [
            {
                title: '相册',
                docs: 'https://docs.rsshub.app/picture.html#google-xiang-ce',
                source: '/share/*',
                target: (params, url, document) => {
                    const id = document && document.querySelector('html').innerHTML.match(/photos.app.goo.gl\/(.*?)"/)[1];
                    return id ? `/google/album/${id}` : '';
                },
            },
        ],
        sites: [{ title: 'Sites', docs: 'https://docs.rsshub.app/blog.html#google-sites', source: ['/site/:id/*', '/site/:id'], target: '/google/sites/:id' }],
    },
    'javlibrary.com': {
        _name: 'javlibrary',
        www: [
            { title: '新话题', docs: 'https://docs.rsshub.app/multimedia.html#javlibrary', source: '/cn', target: '/javlibrary/videos/update' },
            { title: '新发行', docs: 'https://docs.rsshub.app/multimedia.html#javlibrary', source: '/cn', target: '/javlibrary/videos/newrelease' },
            { title: '新加入', docs: 'https://docs.rsshub.app/multimedia.html#javlibrary', source: '/cn', target: '/javlibrary/videos/newentries' },
            { title: '最想要', docs: 'https://docs.rsshub.app/multimedia.html#javlibrary', source: '/cn', target: '/javlibrary/videos/mostwanted' },
            { title: '高评价', docs: 'https://docs.rsshub.app/multimedia.html#javlibrary', source: '/cn', target: '/javlibrary/videos/bestrated' },
            { title: '最佳评论', docs: 'https://docs.rsshub.app/multimedia.html#javlibrary', source: '/cn', target: '/javlibrary/bestreviews' },
            { title: '影星', docs: 'https://docs.rsshub.app/multimedia.html#javlibrary', source: '/cn/vl_star.php', target: (params, url) => `/javlibrary/stars/${new URL(url).searchParams.get('s')}` },
            {
                title: '用户文章',
                docs: 'https://docs.rsshub.app/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userposts`,
            },
            {
                title: '用户拥有',
                docs: 'https://docs.rsshub.app/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userowned`,
            },
            {
                title: '用户看过',
                docs: 'https://docs.rsshub.app/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userwatched`,
            },
            {
                title: '用户想要',
                docs: 'https://docs.rsshub.app/multimedia.html#javlibrary',
                source: ['/cn/user.php', '/cn/userposts.php', '/cn/userwateched.php', '/cn/userowned.php', '/cn/userwanted.php'],
                target: (params, url) => `/javlibrary/users/${new URL(url).searchParams.get('u')}/userwanted`,
            },
        ],
    },
    'qidian.com': {
        _name: '起点',
        book: [
            { title: '章节', docs: 'https://docs.rsshub.app/reading.html#qi-dian', source: '/info/:id', target: '/qidian/chapter/:id' },
            { title: '讨论区', docs: 'https://docs.rsshub.app/reading.html#qi-dian', source: '/info/:id', target: '/qidian/forum/:id' },
        ],
        www: [
            { title: '限免', docs: 'https://docs.rsshub.app/reading.html#qi-dian', source: '/free', target: '/qidian/free' },
            { title: '女生限免', docs: 'https://docs.rsshub.app/reading.html#qi-dian', source: '/mm/free', target: '/qidian/free/mm' },
        ],
    },
    'hackerone.com': { _name: 'HackerOne', '.': [{ title: 'HackerOne Hacker Activity', docs: 'https://docs.rsshub.app/other.html#hackerone-hacker-activity', source: '/hacktivity', target: '/hackerone/hacktivity' }] },
    'cowlevel.net': { _name: '奶牛关', '.': [{ title: '元素文章', docs: 'https://docs.rsshub.app/game.html#nai-niu-guan', source: ['/element/:id', '/element/:id/article'], target: '/cowlevel/element/:id' }] },
    'beijing.gov.cn': { wjw: [{ title: '北京卫生健康委员会', docs: 'https://docs.rsshub.app/government.html#bei-jing-shi-wei-sheng-jian-kang-wei-yuan-hui', source: '/xwzx_20031/:caty', target: '/gov/beijing/mhc/:caty' }] },
    'ynu.edu.cn': {
        _name: '云南大学',
        home: [{ title: '官网消息通告', docs: 'https://docs.rsshub.app/university.html#yun-nan-da-xue', source: '/tzgg.htm', target: '/ynu/home' }],
        jwc: [
            { title: '教务处教务科通知', docs: 'https://docs.rsshub.app/university.html#yun-nan-da-xue', source: '/*', target: '/jwc/1' },
            { title: '教务处学籍科通知', docs: 'https://docs.rsshub.app/university.html#yun-nan-da-xue', source: '/*', target: '/jwc/2' },
            { title: '教务处教学研究科通知', docs: 'https://docs.rsshub.app/university.html#yun-nan-da-xue', source: '/*', target: '/jwc/3' },
            { title: '教务处实践科学科通知', docs: 'https://docs.rsshub.app/university.html#yun-nan-da-xue', source: '/*', target: '/jwc/4' },
        ],
        grs: [{ title: '研究生院通知', docs: 'https://docs.rsshub.app/university.html#yun-nan-da-xue', source: '/*', target: '' }],
    },
    'zju.edu.cn': {
        _name: '浙江大学',
        cst: [
            { title: '软件学院 - 全部通知', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: ['', '/*tpath'], target: '/zju/cst/0' },
            { title: '软件学院 - 招生信息', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/32178/list.htm', target: '/zju/cst/1' },
            { title: '软件学院 - 教务管理', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36216/list.htm', target: '/zju/cst/2' },
            { title: '软件学院 - 论文管理', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36217/list.htm', target: '/zju/cst/3' },
            { title: '软件学院 - 思政工作', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36192/list.htm', target: '/zju/cst/4' },
            { title: '软件学院 - 评奖评优', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36228/list.htm', target: '/zju/cst/5' },
            { title: '软件学院 - 实习就业', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36193/list.htm', target: '/zju/cst/6' },
            { title: '软件学院 - 国际实习', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36235/list.htm', target: '/zju/cst/7' },
            { title: '软件学院 - 国内合作科研', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36194/list.htm', target: '/zju/cst/8' },
            { title: '软件学院 - 国际合作科研', docs: 'https://docs.rsshub.app/university.html#zhe-jiang-da-xue', source: '/36246/list.htm', target: '/zju/cst/9' },
        ],
    },
    'kuaidi100.com': {
        _name: '快递100',
        '.': [
            {
                title: '快递追踪',
                docs: 'https://docs.rsshub.app/other.html#kuai-di-100',
                source: '/',
                target: (params, url, document) => {
                    const postid = document && document.querySelector('#postid').value;
                    const com = document && document.querySelector('#selectComBtn').childNodes[1].attributes[1].value;
                    if (com && com !== 'default' && postid) {
                        return `/kuaidi100/track/${com}/${postid}`;
                    }
                },
            },
            { title: '支持的快递公司列表', docs: 'https://docs.rsshub.app/other.html#kuai-di-100', source: '/', target: '/kuaidi100/company' },
        ],
    },
    'gongxue.cn': {
        _name: '工学网',
        '.': [
            { title: '要闻', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/gongxue/yw' },
            { title: '时讯', docs: 'https://docs.rsshub.app/university.html#ha-er-bin-gong-cheng-da-xue', source: '/*', target: '/heu/gongxue/sx' },
        ],
    },
    'japanpost.jp': {
        _name: '日本郵便',
        'trackings.post': [
            {
                title: '郵便・荷物の追跡',
                docs: 'https://docs.rsshub.app/other.html#ri-ben-you-bian-you-bian-zhui-ji-サービス',
                source: '/services/srv/search/direct',
                target: (params, url) => {
                    const reqCode = new URL(url).searchParams.get('reqCodeNo1').toUpperCase();
                    const locale = new URL(url).searchParams.get('locale').toLowerCase();
                    if ((reqCode.search(/^(?:\d{11,12}|[A-Z]{2}\d{9}[A-Z]{2})$/) === 0 && locale === 'ja') || locale === 'en') {
                        return `/japanpost/track/${reqCode}/${locale}`;
                    }
                },
            },
        ],
    },
    'apnews.com': { _name: 'AP News', '.': [{ title: '话题', docs: 'https://docs.rsshub.app/traditional-media.html#ap-news', source: '/:topic', target: '/apnews/topics/:topic' }] },
    'biquge5200.com': { www: [{ title: 'biquge5200.com', docs: 'https://docs.rsshub.app/reading.html#bi-qu-ge-biquge5200-com', source: '/:id', target: '/novel/biquge/:id' }] },
    'biquge.info': { www: [{ title: 'biquge.info', docs: 'https://docs.rsshub.app/reading.html#bi-qu-ge-biquge-info', source: '/:id', target: '/novel/biqugeinfo/:id' }] },
    'matters.news': {
        _name: 'Matters',
        '.': [
            { title: '最新排序', docs: 'https://docs.rsshub.app/new-media.html#matters', source: '', target: '/matters/latest' },
            { title: '标签', docs: 'https://docs.rsshub.app/new-media.html#matters', source: '/tags/:tid', target: '/matters/tags/:tid' },
            {
                title: '作者',
                docs: 'https://docs.rsshub.app/new-media.html#matters',
                source: ['/:id', '/:id/comments'],
                target: (params) => {
                    const uid = params.id.replace('@', '');
                    return uid ? `/matters/author/${uid}` : '';
                },
            },
        ],
    },
    'zhaishuyuan.com': { _name: '斋书苑', '.': [{ title: '最新章节', docs: 'https://docs.rsshub.app/reading.html#zhai-shu-yuan', source: ['/book/:id', '/read/:id'], target: '/novel/zhaishuyuan/:id' }] },
    'hbut.edu.cn': {
        _name: '湖北工业大学',
        www: [
            {
                title: '新闻中心',
                docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue',
                source: '/xwzx/:name',
                target: (params) => {
                    const type = params.name.replace('.htm', '');
                    return type ? `/hbut/news/${type}` : '/hbut/news/tzgg';
                },
            },
        ],
        jsjxy: [
            { title: '新闻动态', docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue', source: '/index/xwdt.htm', target: '/hbut/cs/xwdt' },
            { title: '通知公告', docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue', source: '/index/tzgg.htm', target: '/hbut/cs/tzgg' },
            { title: '教学信息', docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue', source: '/jxxx.htm', target: '/hbut/cs/jxxx' },
            { title: '科研动态', docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue', source: '/kxyj/kydt.htm', target: '/hbut/cs/kydt' },
            { title: '党建活动', docs: 'http://docs.rsshub.app/university.html#hu-bei-gong-ye-da-xue', source: '/djhd/djhd.htm', target: '/hbut/cs/djhd' },
        ],
    },
    'zcool.com.cn': {
        _name: '站酷',
        www: [
            { title: '发现', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: '', target: '/zcool/discover' },
            { title: '发现 - 精选 - 全部推荐', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: '', target: '/zcool/discover/all' },
            { title: '发现 - 精选 - 首页推荐', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: '', target: '/zcool/discover/home' },
            { title: '发现 - 精选 - 编辑精选', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: '', target: '/zcool/discover/home' },
            { title: '发现 - 精选 - 文章 - 编辑精选', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: '', target: '/zcool/discover/article' },
            { title: '作品榜单', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: '', target: '/zcool/top/design' },
            { title: '文章榜单', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: '', target: '/zcool/top/article' },
            { title: '用户作品', docs: 'https://docs.rsshub.app/design.html#zhan-ku', source: ['/u/:id'], target: '/zcool/user/:id' },
        ],
    },
    't.me': {
        _name: 'Telegram',
        '.': [
            {
                title: '频道',
                docs: 'https://docs.rsshub.app/social-media.html#telegram',
                source: '/:username',
                target: (params, url, document) => {
                    const isChannel = document && document.querySelector('.tgme_action_button_label');
                    if (isChannel) {
                        return '/telegram/channel/:username';
                    }
                },
            },
            { title: '频道', docs: 'https://docs.rsshub.app/social-media.html#telegram', source: '/s/:username', target: '/telegram/channel/:username' },
        ],
    },
    'zhuixinfan.com': { _name: '追新番日剧站', '.': [{ title: '更新列表', docs: 'https://docs.rsshub.app/multimedia.html#zhui-xin-fan-ri-ju-zhan', source: ['/main.php'], target: '/zhuixinfan/list' }] },
    'etoland.co.kr': {
        _name: 'eTOLAND',
        '.': [{ title: '主题贴', docs: 'https://docs.rsshub.app/bbs.html#etoland', source: ['/bbs/board.php', '/plugin/mobile/board.php'], target: (params, url) => `/etoland/${new URL(url).searchParams.get('bo_table')}` }],
    },
    'javbus.com': {
        _name: 'JavBus',
        www: [
            { title: '首页', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/', target: '/javbus/home' },
            { title: '分类', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/genre/:gid', target: '/javbus/genre/:gid' },
            { title: '演员', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/star/:sid', target: '/javbus/star/:sid' },
            { title: '系列', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/series/:seriesid', target: '/javbus/series/:seriesid' },
            { title: '首页 / 步兵', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/uncensored', target: '/javbus/uncensored/home' },
            { title: '分类 / 步兵', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/uncensored/genre/:gid', target: '/javbus/uncensored/genre/:gid' },
            { title: '演员 / 步兵', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/uncensored/star/:sid', target: '/javbus/uncensored/star/:sid' },
            { title: '系列 / 步兵', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/uncensored/series/:seriesid', target: '/javbus/uncensored/series/:seriesid' },
        ],
    },
    'javbus.one': {
        _name: 'JavBus',
        www: [
            { title: '首页 / 欧陆风云', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/', target: '/javbus/western/home' },
            { title: '分类 / 欧陆风云', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/genre/:gid', target: '/javbus/western/genre/:gid' },
            { title: '演员 / 欧陆风云', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/star/:sid', target: '/javbus/western/star/:sid' },
            { title: '系列 / 欧陆风云', docs: 'https://docs.rsshub.app/multimedia.html#javbus', source: '/series/:seriesid', target: '/javbus/western/series/:seriesid' },
        ],
    },
    'onejav.com': {
        _name: 'OneJAV BT',
        '.': [
            {
                title: '今日种子',
                docs: 'https://docs.rsshub.app/multimedia.html#onejav',
                source: '/',
                target: (params, url, document) => {
                    const today = document.querySelector('div.card.mb-1.card-overview').getAttribute('data-date').replace(/-/g, '');
                    return `/onejav/day/${today}`;
                },
            },
            {
                title: '今日演员',
                docs: 'https://docs.rsshub.app/multimedia.html#onejav',
                source: '/',
                target: (params, url, document) => {
                    const star = document.querySelector('div.card-content > div > a').getAttribute('href');
                    return `/onejav${star}`;
                },
            },
            {
                title: '页面种子',
                docs: 'https://docs.rsshub.app/multimedia.html#onejav',
                source: ['/:type', '/:type/:key', '/:type/:key/:morekey'],
                target: (params, url, document) => {
                    const itype = params.morekey === undefined ? params.type : params.type === 'tag' ? 'tag' : 'day';
                    let ikey = `${itype === 'day' ? params.type : ''}${params.key || ''}${itype === 'tag' && params.morekey !== undefined ? '%2F' : ''}${params.morekey || ''}`;
                    if (ikey === '' && itype === 'tag') {
                        ikey = document.querySelector('div.thumbnail.is-inline > a').getAttribute('href').replace('/tag/', '').replace('/', '%2F');
                    } else if (ikey === '' && itype === 'actress') {
                        ikey = document.querySelector('div.card > a').getAttribute('href').replace('/actress/', '');
                    }
                    return `/onejav/${itype}/${ikey}`;
                },
            },
        ],
    },
    '141jav.com': {
        _name: '141JAV BT',
        '.': [
            {
                title: '今日种子',
                docs: 'https://docs.rsshub.app/multimedia.html#141jav',
                source: '/',
                target: (params, url, document) => {
                    const today = document.querySelector('div.card.mb-1.card-overview').getAttribute('data-date').replace(/-/g, '');
                    return `/141jav/day/${today}`;
                },
            },
            {
                title: '今日演员',
                docs: 'https://docs.rsshub.app/multimedia.html#141jav',
                source: '/',
                target: (params, url, document) => {
                    const star = document.querySelector('div.card-content > div > a').getAttribute('href');
                    return `/141jav${star}`;
                },
            },
            {
                title: '页面种子',
                docs: 'https://docs.rsshub.app/multimedia.html#141jav',
                source: ['/:type', '/:type/:key', '/:type/:key/:morekey'],
                target: (params, url, document) => {
                    const itype = params.morekey === undefined ? params.type : params.type === 'tag' ? 'tag' : 'day';
                    let ikey = `${itype === 'day' ? params.type : ''}${params.key || ''}${itype === 'tag' && params.morekey !== undefined ? '%2F' : ''}${params.morekey || ''}`;
                    if (ikey === '' && itype === 'tag') {
                        ikey = document.querySelector('div.thumbnail.is-inline > a').getAttribute('href').replace('/tag/', '').replace('/', '%2F');
                    } else if (ikey === '' && itype === 'actress') {
                        ikey = document.querySelector('div.card > a').getAttribute('href').replace('/actress/', '');
                    }
                    return `/141jav/${itype}/${ikey}`;
                },
            },
        ],
    },
    '141ppv.com': {
        _name: '141ppv BT',
        '.': [
            {
                title: '今日种子',
                docs: 'https://docs.rsshub.app/multimedia.html#141pvp',
                source: '/',
                target: (params, url, document) => {
                    const today = document.querySelector('div.card.mb-1.card-overview').getAttribute('data-date').replace(/-/g, '');
                    return `/141ppv/day/${today}`;
                },
            },
            {
                title: '今日演员',
                docs: 'https://docs.rsshub.app/multimedia.html#141ppv',
                source: '/',
                target: (params, url, document) => {
                    const star = document.querySelector('div.card-content > div > a').getAttribute('href');
                    return `/141ppv${star}`;
                },
            },
            {
                title: '页面种子',
                docs: 'https://docs.rsshub.app/multimedia.html#141ppv',
                source: ['/:type', '/:type/:key', '/:type/:key/:morekey'],
                target: (params, url, document) => {
                    const itype = params.morekey === undefined ? params.type : params.type === 'tag' ? 'tag' : 'day';
                    let ikey = `${itype === 'day' ? params.type : ''}${params.key || ''}${itype === 'tag' && params.morekey !== undefined ? '%2F' : ''}${params.morekey || ''}`;
                    if (ikey === '' && itype === 'tag') {
                        ikey = document.querySelector('div.thumbnail.is-inline > a').getAttribute('href').replace('/tag/', '').replace('/', '%2F');
                    } else if (ikey === '' && itype === 'actress') {
                        ikey = document.querySelector('div.card > a').getAttribute('href').replace('/actress/', '');
                    }
                    return `/141ppv/${itype}/${ikey}`;
                },
            },
        ],
    },
    'sexinsex.net': {
        _name: 'sexinsex',
        '.': [
            {
                title: '分区帖子',
                docs: 'https://docs.rsshub.app/multimedia.html#sexinsex',
                source: '/bbs/:path',
                target: (params, url) => {
                    let pid, typeid;
                    const static_matched = params.path.match(/forum-(\d+)-\d+.html/);
                    if (static_matched) {
                        pid = static_matched[1];
                    } else if (params.path === 'forumdisplay.php') {
                        pid = new URL(url).searchParams.get('fid');
                        typeid = new URL(url).searchParams.get('typeid');
                    } else {
                        return false;
                    }
                    return `/sexinsex/${pid}/${typeid ? typeid : ''}`;
                },
            },
        ],
    },
    't66y.com': {
        _name: '草榴社区',
        www: [
            {
                title: '分区帖子',
                docs: 'https://docs.rsshub.app/multimedia.html#cao-liu-she-qu',
                source: '/thread0806.php',
                target: (params, url) => {
                    const id = new URL(url).searchParams.get('fid');
                    const type = new URL(url).searchParams.get('type');
                    return `/t66y/${id}/${type ? type : ''}`;
                },
            },
        ],
    },
    'umass.edu': {
        _name: 'UMASS Amherst',
        ece: [
            { title: 'ECE News', docs: 'http://docs.rsshub.app/en/university.html#umass-amherst', source: '/news', target: '/umass/amherst/ecenews' },
            { title: 'ECE Seminar', docs: 'http://docs.rsshub.app/en/university.html#umass-amherst', source: '/seminars', target: '/umass/amherst/eceseminar' },
        ],
        'www.cics': [{ title: 'CICS News', docs: 'http://docs.rsshub.app/en/university.html#umass-amherst', source: '/news', target: '/umass/amherst/csnews' }],
        www: [
            { title: 'IPO Events', docs: 'http://docs.rsshub.app/en/university.html#umass-amherst', source: '/ipo/iss/events', target: '/umass/amherst/ipoevents' },
            { title: 'IPO Featured Stories', docs: 'http://docs.rsshub.app/en/university.html#umass-amherst', source: '/ipo/iss/featured-stories', target: '/umass/amherst/ipostories' },
        ],
    },
    'lofter.com': {
        _name: 'Lofter',
        www: [{ title: '话题 (标签)', docs: 'https://docs.rsshub.app/social-media.html#lofter', source: ['/tag/:name', '/tag/:name/:type'], target: (params) => `/lofter/tag/${params.name}/${params.type || ''}` }],
    },
    'yuque.com': {
        _name: '语雀',
        www: [
            {
                title: '知识库',
                docs: 'https://docs.rsshub.app/study.html#yu-que',
                source: ['/:space/:book'],
                target: (params, url, document) => {
                    const match = document.documentElement.innerHTML.match(/JSON\.parse\(decodeURIComponent\("(.*)"\)/);
                    if (match && match[1]) {
                        const dataStr = match[1];
                        try {
                            const appData = JSON.parse(decodeURIComponent(dataStr));
                            return `/yuque/doc/${appData.book.id}`;
                        } catch (e) {
                            // pass
                        }
                    }
                },
            },
        ],
    },
    'bjeea.com': {
        _name: '北京考试院',
        www: [
            { title: '首页 / 通知公告', docs: 'https://docs.rsshub.app/government.html#bei-jing-jiao-yu-kao-shi-yuan', source: ['/html/bjeeagg'], target: '/gov/beijing/bjeea/bjeeagg' },
            { title: '首页 / 招考政策', docs: 'https://docs.rsshub.app/government.html#bei-jing-jiao-yu-kao-shi-yuan', source: ['/html/zkzc'], target: '/gov/beijing/bjeea/zkzc' },
            { title: '首页 / 自考快递', docs: 'https://docs.rsshub.app/government.html#bei-jing-jiao-yu-kao-shi-yuan', source: ['/html/zkkd'], target: '/gov/beijing/bjeea/zkkd' },
        ],
    },
    'hk01.com': {
        _name: '香港01',
        www: [
            { title: '最 Hit', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-01', source: ['/hot', '/'], target: '/hk01/hot' },
            { title: 'zone', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-01', source: '/zone/:id/:title', target: '/hk01/zone/:id' },
            { title: 'channel', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-01', source: '/channel/:id/:title', target: '/hk01/channel/:id' },
            { title: 'issue', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-01', source: '/issue/:id/:title', target: '/hk01/issue/:id' },
            { title: 'tag', docs: 'https://docs.rsshub.app/traditional-media.html#xiang-gang-01', source: '/tag/:id/:title', target: '/hk01/tag/:id' },
        ],
    },
    'douban.com': {
        _name: '豆瓣',
        www: [
            {
                title: '用户的广播',
                docs: 'https://docs.rsshub.app/social-media.html#dou-ban',
                source: '/people/:user/',
                target: (params, url, document) => {
                    const uid = document && document.querySelector('html').innerHTML.match(/"id":"([0-9]+)"/)[1];
                    return uid ? `/douban/people/${uid}/status` : '';
                },
            },
            { title: '小组-最新', docs: 'https://docs.rsshub.app/social-media.html#dou-ban', source: '/group/:groupid', target: '/douban/group/:groupid' },
            { title: '小组-最热', docs: 'https://docs.rsshub.app/social-media.html#dou-ban', source: '/group/:groupid', target: '/douban/group/:groupid/essence' },
            { title: '小组-精华', docs: 'https://docs.rsshub.app/social-media.html#dou-ban', source: '/group/:groupid', target: '/douban/group/:groupid/elite' },
        ],
    },
    'okjike.com': {
        _name: '即刻',
        m: [
            {
                title: '用户动态',
                docs: 'https://docs.rsshub.app/social-media.html#ji-ke-yong-hu-dong-tai',
                source: '/reposts/:repostId',
                target: (params, url, document) => {
                    const uid = document.querySelector('.avatar').getAttribute('href').replace('/users/', '');
                    return uid ? `/jike/user/${uid}` : '';
                },
            },
            { title: '圈子', docs: 'https://docs.rsshub.app/social-media.html#ji-ke-quan-zi', source: '/topics/:id', target: '/jike/topic/:id' },
            { title: '圈子 - 纯文字', docs: 'https://docs.rsshub.app/social-media.html#ji-ke-quan-zi-chun-wen-zi', source: '/topics/:id', target: '/jike/topic/text/:id' },
        ],
    },
    'ems.com.cn': { _name: '中国邮政速递物流', www: [{ title: '新闻', docs: 'https://docs.rsshub.app/other.html#zhong-guo-you-zheng-su-di-wu-liu', source: '/aboutus/xin_wen_yu_shi_jian.html', target: '/ems/news' }] },
    'popiapp.cn': {
        _name: 'Popi 提问箱',
        www: [
            {
                title: '提问箱新回答',
                docs: 'https://docs.rsshub.app/social-media.html#popi-ti-wen-xiang',
                source: '/:id',
                target: (params) => {
                    if (params.id) {
                        return '/popiask/:id';
                    }
                },
            },
        ],
    },
    'nppa.gov.cn': {
        _name: '国家新闻出版署',
        www: [
            { title: '栏目', docs: 'https://docs.rsshub.app/government.html#guo-jia-xin-wen-chu-ban-shu', source: '/nppa/channels/:channel', target: (params, url) => `/gov/nppa/${/nppa\/channels\/(\d+)\.shtml/.exec(url)[1]}` },
            {
                title: '内容',
                docs: 'https://docs.rsshub.app/government.html#guo-jia-xin-wen-chu-ban-shu',
                source: '/nppa/contents/:channel/:content',
                target: (params, url) => `/gov/nppa/${/nppa\/contents\/(\d+\/\d+)\.shtml/.exec(url)[1]}`,
            },
        ],
    },
    'acfun.cn': {
        _name: 'AcFun',
        www: [
            { tilte: '番剧', docs: 'https://docs.rsshub.app/anime.html#acfun-fan-ju', source: '/bangumi/:id', target: (params) => `/acfun/bangumi/${params.id.replace('aa', '')}` },
            { title: '用户投稿', docs: 'https://docs.rsshub.app/anime.html#acfun-yong-hu-tou-gao', source: '/u/:id', target: '/acfun/user/video/:id' },
        ],
    },
    'behance.net': {
        _name: 'Behance',
        www: [
            {
                title: 'User',
                docs: 'https://docs.rsshub.app/design.html#behance-user-works',
                source: ['/:user'],
                target: (params, url, document) => {
                    const uid1 = document && document.querySelector('html').innerHTML.match(/([^/]+)\/insights/)[1];
                    return `/behance/${uid1}`;
                },
            },
        ],
    },
    'picuki.com': { _name: 'Picuki', www: [{ title: '用户', docs: 'https://docs.rsshub.app/social-media.html#picuki-yong-hu', source: '/profile/:id', target: '/picuki/profile/:id' }] },
    'jjmhw.cc': { _name: '漫小肆', www: [{ title: '漫画更新', docs: 'https://docs.rsshub.app/anime.html#man-xiao-si', source: '/book/:id', target: '/manxiaosi/book/:id' }] },
    'wenxuecity.com': {
        _name: '文学城',
        blog: [
            { title: '博客', docs: 'https://docs.rsshub.app/bbs.html#wen-xue-cheng-bo-ke', source: '/myblog/:id', target: '/wenxuecity/blog/:id' },
            { title: '博客', docs: 'https://docs.rsshub.app/bbs.html#wen-xue-cheng-bo-ke', source: '/myoverview/:id', target: '/wenxuecity/blog/:id' },
        ],
        bbs: [
            { title: '最新主题', docs: 'https://docs.rsshub.app/bbs.html#wen-xue-cheng-zui-xin-zhu-ti', source: '/:cat', target: '/wenxuecity/bbs/:cat' },
            { title: '最新主题 - 精华区', docs: 'https://docs.rsshub.app/bbs.html#wen-xue-cheng-zui-xin-zhu-ti', source: '/:cat', target: '/wenxuecity/bbs/:cat/1' },
            {
                title: '最热主题',
                docs: 'https://docs.rsshub.app/bbs.html#wen-xue-cheng-zui-re-zhu-ti',
                source: '/?cid=*',
                target: (params, url, document) => {
                    const cid = document && new URL(document.location).searchParams.get('cid');
                    return `/wenxuecity/hot/${cid}`;
                },
            },
        ],
    },
    'buaq.net': { _name: '不安全资讯', '.': [{ title: '不安全资讯', docs: 'http://docs.rsshub.app/new-media.html#bu-an-quan', source: '/', target: '/buaq' }] },
    'jian-ning.com': { _name: '建宁闲谈', '.': [{ title: '文章', docs: 'https://docs.rsshub.app/blog.html#jian-ning-xian-tan', source: '/*', target: '/blogs/jianning' }] },
    'matataki.io': {
        _name: 'matataki',
        www: [
            { title: '最热作品', docs: 'https://docs.rsshub.app/new-media.html#matataki', source: '/article/', target: '/matataki/posts/hot' },
            { title: '最新作品', docs: 'https://docs.rsshub.app/new-media.html#matataki', source: '/article/latest', target: '/matataki/posts/latest' },
            { title: '作者创作', docs: 'https://docs.rsshub.app/new-media.html#matataki', source: '/user/:uid', target: (params) => `/matataki/users/${params.uid}/posts` },
            { title: 'Fan票关联作品', docs: 'https://docs.rsshub.app/new-media.html#matataki', source: ['/token/:tokenId', '/token/:tokenId/circle'], target: (params) => `/matataki/tokens/${params.tokenId}/posts` },
            {
                title: '标签关联作品',
                docs: 'https://docs.rsshub.app/new-media.html#matataki',
                source: ['/tag/:tagId'],
                target: (params, url) => {
                    const tagName = new URL(url).searchParams.get('name');
                    return `/matataki/tags/${params.tagId}/${tagName}/posts`;
                },
            },
            { title: '收藏夹', docs: 'https://docs.rsshub.app/new-media.html#matataki', source: '/user/:uid/favlist/:fid', target: (params) => `/matataki/users/${params.uid}/favorites/${params.fid}/posts` },
        ],
    },
    'eventernote.com': { _name: 'Eventernote', www: [{ title: '声优活动及演唱会', docs: 'https://docs.rsshub.app/anime.html#eventernote', source: '/actors/:name/:id/events', target: '/eventernote/actors/:name/:id' }] },
    'instagram.com': {
        _name: 'Instagram',
        www: [
            {
                title: '用户',
                docs: 'https://docs.rsshub.app/social-media.html#instagram',
                source: '/:id',
                target: (params) => {
                    if (params.id !== 'explore' && params.id !== 'developer') {
                        return '/instagram/user/:id';
                    }
                },
            },
        ],
    },
    'huya.com': { _name: '虎牙直播', '.': [{ title: '直播间开播', docs: 'https://docs.rsshub.app/live.html#hu-ya-zhi-bo-zhi-bo-jian-kai-bo', source: '/:id', target: '/huya/live/:id' }] },
    'craigslist.org': { _name: 'Craigslist', '.': [{ title: '商品搜索列表', docs: 'https://docs.rsshub.app/shopping.html#craigslist' }] },
    'saraba1st.com': {
        _name: 'Saraba1st',
        bbs: [
            {
                title: '帖子',
                docs: 'https://docs.rsshub.app/bbs.html#saraba1st',
                source: '/2b/:id',
                target: (params) => {
                    const id = params.id.includes('thread') ? params.id.split('-')[1] : '';
                    return id ? `/saraba1st/thread/${id}` : '';
                },
            },
        ],
    },
    'scboy.com': {
        _name: 'scboy 论坛',
        www: [
            {
                title: '帖子',
                docs: 'https://docs.rsshub.app/bbs.html#scboy',
                source: '',
                target: (params, url) => {
                    const id = url.includes('thread') ? url.split('-')[1].split('.')[0] : '';
                    return id ? `/scboy/thread/${id}` : '';
                },
            },
        ],
    },
    'cqut.edu.cn': {
        _name: '重庆理工大学',
        tz: [{ title: '通知', docs: 'https://docs.rsshub.app/university.html#chong-qing-li-gong-da-xue', source: '/*' }],
        lib: [{ title: '图书馆通知', docs: 'https://docs.rsshub.app/university.html#chong-qing-li-gong-da-xue', source: '/*' }],
    },
    'cqwu.net': {
        _name: '重庆文理学院',
        www: [
            {
                title: '通知',
                docs: 'https://docs.rsshub.app/university.html#chong-qing-wen-li-xue-yuan',
                source: '/:type',
                target: (params) => {
                    if (params.type === 'channel_7721.html') {
                        return '/cqwu/news/notify';
                    }
                },
            },
            {
                title: '学术活动',
                docs: 'https://docs.rsshub.app/university.html#chong-qing-wen-li-xue-yuan',
                source: '/:type',
                target: (params) => {
                    if (params.type === 'channel_7722.html') {
                        return '/cqwu/news/academiceve';
                    }
                },
            },
        ],
    },
    'trakt.tv': {
        _name: 'Trakt.tv',
        '.': [
            {
                title: '用户收藏',
                docs: 'https://docs.rsshub.app/multimedia.html#trakt-tv-yong-hu-shou-cang',
                source: ['/users/:username/collection/:type/added', '/users/:username/collection'],
                target: (params) => `/trakt/collection/${params.username}/${params.type || 'all'}`,
            },
        ],
    },
    'eagle.cool': {
        _name: 'Eagle',
        cn: [{ title: '更新日志', docs: 'https://docs.rsshub.app/program-update.html#eagle', source: '/changelog', target: '/eagle/changelog/cn' }],
        tw: [{ title: '更新日誌', docs: 'https://docs.rsshub.app/program-update.html#eagle', source: '/changelog', target: '/eagle/changelog/tw' }],
        en: [{ title: 'Release Notes', docs: 'https://docs.rsshub.app/program-update.html#eagle', source: '/changelog', target: '/eagle/changelog/en' }],
    },
    'furaffinity.net': {
        _name: 'Fur Affinity',
        www: [
            { title: '主页', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/', target: '/furaffinity/home' },
            { title: '浏览', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/browse/', target: '/furaffinity/browse' },
            { title: '站点状态', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/', target: '/furaffinity/status' },
            {
                title: '搜索',
                docs: 'https://docs.rsshub.app/social-media.html#fur-affinity',
                source: '/search/',
                target: (params, url) => {
                    const keyword = new URL(url).searchParams.get('q');
                    if (keyword) {
                        return `/furaffinity/search/${keyword}`;
                    }
                },
            },
            { title: '用户主页简介', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/user/:username/', target: '/furaffinity/user/:username' },
            { title: '用户关注列表', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/watchlist/by/:username/', target: '/furaffinity/watching/:username' },
            { title: '用户被关注列表', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/watchlist/to/:username/', target: '/furaffinity/watchers/:username' },
            { title: '用户接受委托信息', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/commissions/:username/', target: '/furaffinity/commissions/:username' },
            { title: '用户的 Shouts 留言', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/user/:username/', target: '/furaffinity/shouts/:username' },
            { title: '用户的日记', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/journals/:username/', target: '/furaffinity/journals/:username' },
            { title: '用户的创作画廊', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/gallery/:username/', target: '/furaffinity/gallery/:username' },
            { title: '用户非正式作品', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/scraps/:username/', target: '/furaffinity/scraps/:username' },
            { title: '用户的喜爱列表', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/favorites/:username/', target: '/furaffinity/favorites/:username' },
            { title: '作品评论区', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/view/:id/', target: '/furaffinity/submission_comments/:id' },
            { title: '日记评论区', docs: 'https://docs.rsshub.app/social-media.html#fur-affinity', source: '/journal/:id/', target: '/furaffinity/journal_comments/:id' },
        ],
    },
    'gcores.com': {
        _name: '机核网',
        www: [
            { title: '资讯', docs: 'https://docs.rsshub.app/program-update.html#eagle', source: '/news', target: '/gcores/category/news' },
            { title: '视频', docs: 'https://docs.rsshub.app/program-update.html#eagle', source: '/videos', target: '/gcores/category/videos' },
            { title: '电台', docs: 'https://docs.rsshub.app/program-update.html#eagle', source: '/radios', target: '/gcores/category/radios' },
            { title: '文章', docs: 'https://docs.rsshub.app/program-update.html#eagle', source: '/articles', target: '/gcores/category/articles' },
        ],
    },
    'bgm.tv': {
        _name: 'Bangumi',
        '.': [
            { title: '小组话题', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/group/:id', target: '/bangumi/group/:id' },
            { title: '小组话题的新回复', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/group/topic/:id', target: '/bangumi/topic/:id' },
            { title: '现实人物的新作品', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/person/:id', target: '/bangumi/person/:id' },
            { title: '用户日志', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/user/:id', target: '/bangumi/user/blog/:id' },
            { title: '条目的讨论', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/subject/:id', target: '/bangumi/subject/:id/topics' },
            { title: '条目的评论', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/subject/:id', target: '/bangumi/subject/:id/blogs' },
            { title: '条目的章节', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/subject/:id', target: '/bangumi/subject/:id' },
            { title: '条目的吐槽箱', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/subject/:id', target: '/bangumi/subject/:id/comments' },
            { title: '放送列表', docs: 'https://docs.rsshub.app/anime.html#bangumi', source: '/calendar', target: '/bangumi/calendar/today' },
        ],
    },
    'e-hentai.org/': {
        _name: 'E-Hentai',
        '.': [
            { title: '收藏', docs: 'https://docs.rsshub.app/picture.html#ehentai', source: '/favorites.php', target: '/ehentai/favorites' },
            { title: '标签', docs: 'https://docs.rsshub.app/picture.html#ehentai', source: '/tag/:tag', target: '/ehentai/tag/:tag' },
            {
                title: '搜索',
                docs: 'https://docs.rsshub.app/picture.html#ehentai',
                source: '/',
                target: (params, url) => {
                    const keyword = new URL(url).searchParams.toString();
                    if (keyword) {
                        return `/ehentai/search/${keyword}`;
                    }
                },
            },
        ],
    },
    'macwk.com': { _name: 'MacWk', '.': [{ title: '应用更新', docs: 'https://docs.rsshub.app/program-update.html#macwk', source: '/soft/:name', target: '/macwk/soft/:name' }] },
    'zyshow.net': { www: [{ title: '', docs: 'https://docs.rsshub.app/game.html#lv-fa-shi-ying-di', source: '/:name/', target: '/zyshow/:name' }] },
});
