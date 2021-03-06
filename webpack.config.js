var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/goatstone/todo/todo.js',
    output: {
        path: __dirname,
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {test: path.join(__dirname, 'src'), loader: 'babel-loader'}
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'

};