const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        example: path.resolve(__dirname, 'example', 'main.tsx')
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'example', 'bin')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            allowTsInNodeModules: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader'
                    }
                ],
            }
        ]
    },
    resolve: {
        alias: {
            powerslide: __dirname
        },
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ]
    }
};
