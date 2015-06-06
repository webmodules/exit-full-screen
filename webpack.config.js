module.exports = {
  entry: './lib/index',
  output: {
    path: './dist',
    filename: 'exit-full-screen.js',
    library: 'exit-full-screen',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    }]
  }
};
