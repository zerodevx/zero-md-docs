import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['dist/', 'temp/'] },
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'no-tabs': 'error',
      'no-unexpected-multiline': 'error'
    }
  }
]
