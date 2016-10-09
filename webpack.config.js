module.exports = {

    watch: true,

    target: 'electron',

    entry: './app/src/entry.js',

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    }

}
