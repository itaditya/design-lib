const path = require('path');

const postcss = require('rollup-plugin-postcss');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          nested(),
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        extract: options.writeMeta ? path.resolve('dist/style.css') : false,
      })
    );
    return config;
  },
};
