let path = require('path');

module.exports = {
    /*...*/
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    // entry: {
    //     main: path.resolve(__dirname, 'src/index.js'),
    //     Icon: path.resolve(__dirname, 'src/images/icon.svg')
    // },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].[contenthash:8].js',
    //     filename: 'app.js',
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                // vendor chunk
                vendor: {
                    // sync + async chunks
                    name: 'vendor',
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /node_modules/
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    }

    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         chunks: 'all',
    //         maxInitialRequests: Infinity,
    //         minSize: 0,
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name(module) {
    //                     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    //                     return `npm.${packageName.replace('@', '')}`;
    //                 },
    //             },
    //         },
    //     },
    // },
    /*...*/
  }