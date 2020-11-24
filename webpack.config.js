const ROOT_PATH = require('path');

const POST_CSS_PLUGINS = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
];

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: ROOT_PATH.resolve(__dirname, 'app')
    },
    devServer: {
        before: (app, server) => {
            server._watch('./app/**/*.html');
        },
        contentBase: ROOT_PATH.join(__dirname, 'app'),
        hot: true,
        host: '0.0.0.0',
        port: 3000,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options : {
                            importLoaders: 1
                        },
                    },
                    {
                    loader: 'postcss-loader',
                    options: { postcssOptions: {
                        plugins: POST_CSS_PLUGINS
                    }}}
                    ]
            }
        ]
    }
}