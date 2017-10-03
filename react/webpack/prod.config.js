const webpack = require('webpack');
const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { createLodashTransformer } = require('typescript-plugin-lodash');

// This file was initial configured using https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31
// but there is also info here: https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923

const paths = {
  assets: path.resolve(__dirname, '..', 'src')
}

module.exports = {
  resolve: {
    alias:  { 
      "lodash-es": "lodash"
    }
  },
  entry: {
    main: ['react-hot-loader/patch', './src/production.js'],
  },
  output: {
    publicPath: '/',
    path: __dirname + '/../dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

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
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader', options: {
        getCustomTransformers: () => ({ before: [createLodashTransformer()] })
    } },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      template: 'webpack/base.ejs',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(function(chunk) {
      // if it have name, and return name
      if (chunk.name) {
        return chunk.name;
      }
      
      const regex = new RegExp(`${paths.assets}/pages`);

      // every chunk have _modules, and iterate it.
      for (var m of chunk._modules) {
        // module context is the module path of webpack resolve for you.
        // such as require('react')
        // context will be /path/to/project/node_modules/react
        // because I want to locate the dynamic import url rather than other module.
        // and I know the dynamic import path have the prefix like /path/to/project/`resource/assets/pages`
        // so I can locate it use regex.
        if (regex.test(m.context)) {
          // return whatever name you defined
          return 'pages.' + path
            .relative(paths.assets, m.context)
            .split('/')
            .slice(1)
            .join('_');
        }
      }

      return null;
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
    new webpack.optimize.CommonsChunkPlugin({
      async: 'used-twice',
      minChunks(module, count) {
          return count >= 2;
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      openAnalyzer: false,
      defaultSizes: 'gzip',
      reportFilename: 'stats/report.html',
      statsFilename: 'stats/stats.json',
    })
  ],
};
