import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistic: {
    'indent': 2, // 4, or 'tab'
    'quotes': 'single', // or 'double'
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  rules: {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' }],
    'ts/consistent-type-definitions': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'curly': ['error', 'all'],
    'max-statements-per-line': ['error', { max: 1 }],
  },
})
