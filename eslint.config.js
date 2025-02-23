import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['node_modules/**', '**/.config/'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      'indent': ['error', 2],
    },
  },
];
