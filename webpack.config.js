const path = require("path");


module.exports = (paths) => ({
  
  entry: {
    main: path.resolve(__dirname, paths.scripts.src),
  },
  output: {
    path: path.resolve(__dirname, paths.dest),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        //include: path.resolve(__dirname, "./src/index.js"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                { targets: { browsers: ["last 2 versions"] }},
              ],
              [
                "@babel/preset-typescript",
                { targets: { browsers: ["last 2 versions"] }},
              ]
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use:["style-loader","css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use:{
          loader:"file-loader",
          options: {
            name: '[name].[ext]',
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
});
