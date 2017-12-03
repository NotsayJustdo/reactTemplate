//这里是webpack开发环境和生产环境共用的配置
'use strict'
const path = require('path')
const utils = require('./utils') // 这里配置各种样式预编译
const config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {
            '@': resolve('src'),
            'commonStyle': '@/styles/common.scss'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
                options: {
                // @remove-on-eject-begin
                babelrc: false,
                presets: [require.resolve('babel-preset-react-app')],
                // @remove-on-eject-end
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}