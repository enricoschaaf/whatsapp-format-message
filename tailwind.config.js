// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.svelte", "./public/**/*.html"],
  plugins: [require("@tailwindcss/ui")]
}
