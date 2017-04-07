const webpack = require('webpack')
const ExtractTextPlogin = require('extract-text-webpack-plugin')

//exportar Objeto que vai ter toda configuração do projeto
module.exports = {
    //Ponto de entrada da aplicacao
    entry: './src/index.jsx',
    //Saida do javascript
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    //Configuração do web server
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve:{
        //Resolver outras extensoes como a do React
        extensions: ['','.js','.jsx'],
        //Atalho para refenciar os modulos do node dentro do projeto 
        alias: {            
            modules: __dirname + '/node_modules'
        }
    },
    //Gerar o CSS
    plugins: [
        new ExtractTextlugin('app.css')
    ],
    module:{
        loaders: [{
            //Faz parse tanto de .js quanto .jsx
            test: /.js[x]?$/,
            loader: 'babel-loader',
            //Parse vai ignorar a pasta do node modules
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        },{            
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader','css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}