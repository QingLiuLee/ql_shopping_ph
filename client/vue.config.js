module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    lintOnSave:false,   // 不使用eslint
    /*configureWebpack: function(config) {
        return vueLoader.merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },*/
    devServer:{
        port:5212
    }
}