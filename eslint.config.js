import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['node_modules/**', '**/.config/'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      eslintPluginPrettier,
    },
    rules: {
      semi: ['warn', 'always'],
    },
  },
];
