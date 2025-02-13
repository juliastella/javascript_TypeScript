import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import airbnb from "eslint-config-airbnb"; // Configuração do Airbnb
import prettier from "eslint-config-prettier"; // Configuração do Prettier
import pluginReactHooks from "eslint-plugin-react-hooks"; // Plugin para React Hooks

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Aplica a configuração a arquivos JS, JSX, etc.
    languageOptions: {
      globals: {
        ...globals.browser, // Adiciona globais do navegador
      },
      parserOptions: {
        ecmaVersion: 2020, // Define a versão do ECMAScript
        sourceType: "module", // Permite o uso de imports/exports
        ecmaFeatures: {
          jsx: true, // Habilita suporte a JSX
        },
      },
    },
    plugins: {
      react: pluginReact, // Plugin para React
      "react-hooks": pluginReactHooks, // Plugin para React Hooks
    },
    rules: {
      // Regras personalizadas
      "prettier/prettier": "error", // Marca problemas de formatação como erros
      "react/jsx-filename-extension": 0, // Desativa a restrição de JSX em arquivos .jsx
      "import/prefer-default-export": 0, // Permite exportações nomeadas
      "react-hooks/rules-of-hooks": "error", // Verifica as regras dos Hooks
      "react-hooks/exhaustive-deps": "warn", // Verifica dependências dos Hooks
    },
  },
  pluginJs.configs.recommended, // Configurações recomendadas do ESLint
  pluginReact.configs.flat.recommended, // Configurações recomendadas para React
  airbnb, // Configuração do Airbnb
  prettier, // Configuração do Prettier para desativar regras conflitantes
];