const merge = require('webpack-merge');
const common = require('./webpack.common');

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
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    mode: "production",
});