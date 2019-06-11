const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", // 开发环境配置
//   devtool: "cheap-module-source-map", // 线上生成配置
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
    CleanWebpackPlugin(),
    HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/template.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
      hot:true,
      contentBase:path.join(__dirname,"./dist"),
      host:"0.0.0.0",
      port:8080,
      historyApiFallback:true,
      proxy:{
          "/api":"http://localhost:3000"
      }
  }
};
