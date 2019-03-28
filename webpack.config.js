const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    watch: true,
    target: 'electron-renderer',
    entry: './app/src/entry.js',
    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
