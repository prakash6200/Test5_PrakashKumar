# React + TypeScript + Vite Setup

## Installation Guide

### 1. Install Node.js 20+
If Node.js is not installed, check your Node.js version:
```sh
node -v
```
If the version is below 20, install it using NVM:
```sh
nvm install 20
nvm use 20
```

### 2. Create a Vite Project with React and TypeScript
```sh
npm create vite@latest my-app --template react-ts
cd my-app
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Start the Development Server
```sh
npm run dev
```

## ESLint Configuration

### 5. Install ESLint and Required Plugins
```sh
npm install -D eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 6. Create and Configure `eslint.config.js`
```js
import tseslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    react: { version: '18.3' },
  },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

### 7. Enable Type-Checked ESLint Rules
Change:
```js
tseslint.configs.recommended
```
To:
```js
tseslint.configs.recommendedTypeChecked
```
Or:
```js
tseslint.configs.strictTypeChecked
```

### 8. Run ESLint to Check the Project
```sh
npx eslint . --ext .tsx,.ts,.js,.jsx