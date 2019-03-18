var path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    library: 'acuityCalendar',
  },
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  externals: {
    moment: 'moment',
    react: 'react',
    'react-dom': 'react-dom',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      minChunks: 2,
    },
  },
};
