module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  // Last version that doesn't squash type and value imports
  // importOrderTypeScriptVersion: "4.4.0",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    // "^@uploadthing/(.*)$",
    // "^uploadthing/(.*)$",
    // "",
    "^~/(.*)$",
    "^[./]",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
};
