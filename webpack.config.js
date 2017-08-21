const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  entry: './src/module_without_deps.js',
  output: {
    filename: 'no_deps.js',
    path: path.resolve(__dirname, 'dist')
  }
};
