export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        require: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "no-console": "off"
    }
  }
];
