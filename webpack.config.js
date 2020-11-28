const CURRENT_TASK = process.env.npm_lifecycle_event;
const ROOT_PATH = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const fse = require('fs-extra');

const POST_CSS_PLUGINS = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer'),
];

class RunAfterCompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy images', () => {
            fse.copySync('./app/assets/images', './dist/assets/images');
        })
    }
}

let cssLoaderRules = {
    test: /\.css$/i,
    use: [
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
};

let pages = fse.readdirSync('./app').filter(file => {
    return file.endsWith('.html')
}).map(page => {
    return new HTML_WEBPACK_PLUGIN({
        filename: page,
        template: `./app/${page}`
    });
});

let config = {
    entry: './app/assets/scripts/App.js',

    plugins: pages,
    
    module: {
        rules: [
            cssLoaderRules,
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
            },
        ],
    },
};

if (CURRENT_TASK == 'dev') {
    cssLoaderRules.use.unshift('style-loader');

    config.output = {
        filename: 'bundled.js',
        path: ROOT_PATH.resolve(__dirname, 'app')
    };

    config.devServer = {
        before: (app, server) => {
            server._watch('./app/**/*.html');
        },
        contentBase: ROOT_PATH.join(__dirname, 'app'),
        hot: true,
        host: '0.0.0.0',
        port: 3000,
    };

    config.mode = 'development';

} else if (CURRENT_TASK == 'build') {
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            },
        },
    });

    cssLoaderRules.use.unshift(MINI_CSS_EXTRACT_PLUGIN.loader);
    POST_CSS_PLUGINS.push(require('cssnano'));

    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: ROOT_PATH.resolve(__dirname, 'dist')
    };

    config.optimization = {
        splitChunks: {chunks: 'all'}
    };

    config.mode = 'production';

    config.plugins.push(
        new CleanWebpackPlugin(),
        new MINI_CSS_EXTRACT_PLUGIN({filename: 'styles.[chunkhash].css'}),
        new RunAfterCompile()
        );

}

module.exports = config;