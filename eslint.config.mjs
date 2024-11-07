import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {sourceType: "commonjs"},
    rules: {
      "no-unused-vars": "off" // Menonaktifkan no-unused-vars
    }
  },
  {
    languageOptions: { globals: {...globals.browser, ...globals.node} }
  },
  pluginJs.configs.recommended,
  daStyle,
];
