// Install Node.js 20+ (if not installed)
// Check Node.js version
node -v

// If Node.js is below version 20, install it using nvm
nvm install 20
nvm use 20

// Create a Vite project with React and TypeScript
npm create vite@latest my-app --template react-ts
cd my-app

// Install dependencies
npm install

// Start the development server
npm run dev

// Install ESLint and required plugins
npm install -D eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin

// Create and configure eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});

// Enable type-checked ESLint rules
// Change `tseslint.configs.recommended` to:
// `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`

// Run ESLint to check project
npx eslint . --ext .tsx,.ts,.js,.jsx