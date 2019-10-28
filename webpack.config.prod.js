const path = require('path')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin()
]

const optimization = {
  minimizer: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ],
  splitChunks: {
    chunks: 'all'
  }
}

module.exports = {
  mode: 'production',
  target: 'node',

  node: {
    __dirname: false,
    __filename: false
  },

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },

  externals: [nodeExternals()],

  plugins: plugins,
  optimization: optimization,

  resolve: {
    alias: {}
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
