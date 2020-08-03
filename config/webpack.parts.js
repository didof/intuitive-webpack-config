exports.loadCSS = ({ include, exclude }) => ({
   module: {
      rules: [
         {
            test: /\.css$/,
            include,
            exclude,
            use: ["style-loader", "css-loader"]
         }
      ]
   }
})

exports.devServer = ({ host, port } = { host: 'localhost', port: '8080'}) => ({
   compress: true,
   open: true,
   stats: 'errors-only',
   overlay: {
      warnings: true,
      errors: true
   }
})