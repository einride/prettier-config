// defaults are commented out

module.exports = {
  // printWidth: 80,
  // tabWidth: 2,
  // useTabs: false,
  semi: false,
  // singleQuote: false,
  // quoteProps: "as-needed",
  // jsxSingleQuote: false,
  trailingComma: "all",
  // bracketSpacing: true,
  // jsxBracketSameLine: false,
  // arrowParens: "always",
  // rangeStart: 0,
  // rangeEnd: Infinity,
  // requirePragma: false,
  // insertPragma: false,
  // proseWrap: "preserve",
  // htmlWhitespaceSensitivity: "css",
  // endOfLine: "lf",
  // embeddedLanguageFormatting: "auto",
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
}
