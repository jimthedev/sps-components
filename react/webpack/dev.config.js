var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
var TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;
var createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
var styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  entry: {
    main: ['react-hot-loader/patch', './src/development.js'],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
  },

  devtool: 'eval-source-map', //source-map
  resolve: {
    plugins: [new TsConfigPathsPlugin /* { tsconfig, compiler } */()],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // resolve: {
  //   // plugins: [
  //   //   new TsConfigPathsPlugin({
  //   //     tsconfig: "tsconfig.json",
  //   //     compiler: "typescript",
  //   // })
  //   //],
  //
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  modules: false,
                  useBuiltIns: true,
                  targets: {
                    browsers: [
                      'Chrome >= 60',
                      'Safari >= 10.1',
                      'iOS >= 10.3',
                      'Firefox >= 54',
                      'Edge >= 15',
                    ],
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'webpack/base.ejs',
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
};
