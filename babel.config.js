module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~/utils': './src/utils',
            '~/theme': './src/theme',
            '~/hooks': './src/hooks',
            '~/redux': './src/redux',
            '~/assets': './src/assets',
            '~/config': './src/config',
            '~/constants': './src/constants',
            '~/components': './src/components',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      ],
    ],
  };
};
