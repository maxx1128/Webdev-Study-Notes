const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind-config.js'),
    purgecss({
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html']
        }
      ],
      content: ['./_site/*.html', './_site/**/*.html', './_site/**/**/*.html']
    })
  ]
}
