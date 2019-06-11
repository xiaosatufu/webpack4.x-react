const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, dist),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
      CleanWebpackPlugin()
  ],
  devServer: {}
};
