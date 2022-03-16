// defaults in comments

module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false, // true
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all", // "es5"
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "always", // "preserve"
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  overrides: [
    // allow longer line lengths in JSON files
    {
      files: "*.json",
      options: {
        printWidth: 200, // 80
      },
    },
  ],
}
