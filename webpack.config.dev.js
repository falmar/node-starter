const path = require('path')
const nodeExternals = require('webpack-node-externals')

const plugins = []

module.exports = {
  mode: 'development',
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
