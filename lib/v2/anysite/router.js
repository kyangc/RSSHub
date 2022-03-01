module.exports = function (router) {
    router.get('/:scheme', require('./index'));
};
