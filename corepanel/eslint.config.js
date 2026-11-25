import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          // Bloqueia chamar .map() direto em `dataGraph` sem fatiar antes
          selector: "CallExpression[callee.object.name='dataGraph'][callee.property.name='map']",
          message: "Use `dataGraph.slice(0, 5).map(...)` para garantir o limite máximo de 5 itens renderizados.",
        },
      ],
    },
  },
])
