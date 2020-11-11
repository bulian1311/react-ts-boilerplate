const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html')
      })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
}

// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.tsx',
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js']
//   },
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.min.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: 'ts-loader'
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html'
//     })
//   ]
// }