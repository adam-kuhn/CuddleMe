const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    // publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  // devServer: {
  //   historyApiFallback: true
  // },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
