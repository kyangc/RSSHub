module.exports = {
    'feeddd.org': {
        _name: 'Feeddd',
        api: [
            {
                title: '订阅 Feed',
                source: ['/feeds/:id'],
                target: '/wechat/feeddd/:id',
            },
        ],
    },
};
