const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin()
]

const optimization = {
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        sourceMap: true,
        ecma: 6
      }
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
