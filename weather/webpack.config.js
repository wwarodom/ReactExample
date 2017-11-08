module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path:'/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
      contentBase: './',
      inline: true,
      hot: true,
      port: 8080
  }
};
