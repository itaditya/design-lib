module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.filter(
      x => x.test.test && !x.test.test('file.css')
    );
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: { auto: true },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            postcssOptions: {
              plugins: ['postcss-nested', 'autoprefixer'],
            },
          },
        },
      ],
    });

    return config;
  },
};
