const path = require("path");
var HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  plugins:[
    new HtmlWebpackPlugin({
      filename : "template.html",
    template: "./src/template.html"
  }),
    new HtmlWebpackPlugin({
      filename: "page2.html",
    template: "./src/page2.html"
  }),
    new HtmlWebpackPlugin({
      filename : "page3.html",
    template: "./src/page3.html"
  }),
    new HtmlWebpackPlugin({
      filename : "page4.html",
    template: "./src/page4.html"
  }),
    new HtmlWebpackPlugin({
      filename : "page5.html",
    template: "./src/page5.html"
  }),
    new HtmlWebpackPlugin({
      filename : "video_extra.html",
    template: "./src/video_extra.html"
})
],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader" //2. Turns css into commonjs
        ],
      },
      {
        test: /\.js$/,
        exclude : /node_modules/,
        use:  "babel-loader",

      },
      {
      test: /\.html$/,
      use: ["html-loader"]
    },
    {
      test:  /\.(png|jpg)$/,
      use: {
        loader : "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "imgs"
        }
      }
    }
    ]
  }
};
