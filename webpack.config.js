const path = require('path');

module.exports = {
    entry: '.src/index.js', //punto de entrada
    output: {
        filename: 'bundule.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, //Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta de node_modules
                use: {
                    loader: 'babel-loader', //configuracion de una libreria de un loader para pasar nuestro JS moderno a JS mas antiguo para todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar sourcemaps para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //carpeta principal del servidor
        compress: true, //habilitar la compresión gzip
        port: 9000, //puerto del sevidor de desarrollo
    },
};