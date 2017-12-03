var config = {
   entry: './src/index.js',
   output: {
      path:'/',  
      filename: 'bundle.js',
   },
   devServer: {
      port: 80
   },
   module: {
      loaders: [
         {            
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;