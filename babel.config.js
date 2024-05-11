module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: require('core-js/package.json').version,
      },
    ],
  ],
    plugins: [
    "transform-es2015-modules-commonjs",
    "transform-class-properties"
  ]
}
