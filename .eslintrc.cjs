/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",

    "next/core-web-vitals",
    "next/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2023,
    project: true,
    tsconfigRootDir: __dirname,
    extraFileFileExtensions: [".cjs", ".mjs"],
    projectService: typeof process.env.CI === "undefined",
  },

  ignorePatterns: ["conf/**/*.js", "/coverage/", "pages/_error.js"],

  rules: {
    "strict": ["error", "never"],
    "sort-imports": "off",
    "@typescript-eslint/no-empty-function": ["error", { allow: ["private-constructors"] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
    ],
    // I use Array<> when the type spans multiple lines because it's easier to read.
    "@typescript-eslint/array-type": "off",
    // We use type and interface interchangeably for stylistic reasons.
    "@typescript-eslint/consistent-type-definitions": "off",

    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^node:"],
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // Packages. `react` related packages come first.
          [
            "^react",
            "^next",
            "^knex",
            "^kysely",
            "^@clerk",
            "^@tailwindcss",
            "^@testing-library",
            "swr",
            "yup",
            "react-hook-form",
            "^@?\\w",
          ],
          // Internal packages.
          ["^(@|@Lib|@server|@Ctrl|@ui|@components|@/rest-utils)(/.*?(?!\\u0000)|$)"],
          // pages
          ["^(@pages)(/.*?(?!\\u0000)|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // types
          ["^@?[\\w-].*\\u0000$", "^@/[\\w-].*\\u0000$", "^[^.].*\\u0000$", "^\\..*\\u0000$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
  },
  env: {
    browser: false,
    node: true,
    es2020: true,
    es2022: true,
    es2023: true,
  },
};
