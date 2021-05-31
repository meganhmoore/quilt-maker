// tailwind.config.js

module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    important: true,
    purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/public/*.jpg', './src/public/*.jpeg'],
    theme: {},
    variants: {},
    plugins: [],
  }