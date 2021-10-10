const MODULE_RESOLVER = [
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.tsx', '.json'],
    alias: {
      _containers: './src/containers',
      _context: './src/context',
    },
  },
  process.env.NODE_ENV === 'production' && 'transform-remove-console',
].filter(Boolean)

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [MODULE_RESOLVER],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}
