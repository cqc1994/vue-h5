module.exports = {

    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8'
            ]
        },
        'postcss-pxtorem': {

            rootValue: 37.5, //结果为：设计稿元素尺寸/75，比如元素宽750px,最终页面会换算成 10rem（按750宽设计稿配置）

            propList: ['*'],

            exclude: /node_modules/i,
            selectorBlackList: []

        },

    },

};
