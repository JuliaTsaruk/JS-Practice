const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const{CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/js/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: "/dist"
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [  
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/html/index.html'),
            filename: 'index.html',
            chunks: ['index']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader' ] 
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader' , 'sass-loader']
            },
            { 
                test: /\.(js)$/,
                exclude: /node_modules/, 
                use: ['babel-loader'] 
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                    name: './img/[name].[ext]',
                    /*name(resourcePath, resourceQuery) {
                        if (process.env.NODE_ENV === 'development') {
                          return './img/[name].[ext]';
                        }
                        return './img/[contenthash].[ext]';
                    }*/
                }
                
                
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                loader: 'file-loader',
                options:{
                    name(resourcePath, resourceQuery) {
                        if (process.env.NODE_ENV === 'development') {
                          return '/fonts/[name].[ext]';
                        }
                        return '[contenthash].[ext]';
                    },
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    }

}