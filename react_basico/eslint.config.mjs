import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: "babel-eslint",  // Adicione esta linha para especificar o parser
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
