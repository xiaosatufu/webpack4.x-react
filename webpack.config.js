const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSS = require("purifycss-webpack")
const glob = require("glob-all")
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
      },
      {
        test: /\.scss$/,
        use: [
          //   "style-loader", // 创建style标签，并将css添加进去
          MiniCssExtractPlugin.loader,
          "css-loader", // 编译css
          "postcss-loader",
          "sass-loader" // 编译scss
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: "url-loader",
          options: {
            outputPath: "images/", // 图片输出的路径
            limit: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: "fonts/",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extension: ["", ".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "src"),
      pages: path.join(__dirname, "src/pages"),
      router: path.join(__dirname, "src/router")
    }
  },

  plugins: [
    CleanWebpackPlugin(),
    HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/template.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jQuery"
    }),
    new webpack.DefinePlugin({
        "process.env":{
            VUEP_BASE_URL:JSON.stringify('http://localhost:9000')
        }
    }),
    // / 清除无用 css
    new PurifyCSS({
        paths:glob.sync([
            // 要做 CSS Tree Shaking 的路径文件
            path.resolve(__dirname,"./src/*.html"),
            path.resolve(__dirname,"./src/*.js")
        ])
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    usedExports:true,
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
};
