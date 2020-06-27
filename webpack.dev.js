const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    module: {
        rules:[
            {
                test: /\.(png|jpe?g|gif)/,
                use:[
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 21000,
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    mode: "development",
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        host: '0.0.0.0'
    }
});