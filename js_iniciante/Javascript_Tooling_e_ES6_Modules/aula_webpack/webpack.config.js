const path = require('path'); // CommonJS padrão do Node

module.exports = {
    mode: 'development', // Modo correto para desenvolvimento
    entry: './src/index.js',
    output: {  // Caminho correto para o bundle
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // Corrigido para 'resolve'
        filename: 'bundle.js' // Nome do arquivo gerado
    },
    module: {
        rules: [{ 
            exclude: /node_modules/,  // Excluir node_modules
            test: /\.js$/, // Para arquivos JavaScript
            use: {
                loader: 'babel-loader', // Loader do Babel
                options: {
                    presets: ['@babel/preset-env'] // Corrigido para @babel/preset-env
                }
            }
        }]
    },
    devtool: 'source-map' // Gerar source maps para facilitar debugging
};
