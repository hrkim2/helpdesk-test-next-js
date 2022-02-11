module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/Component/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      seegene: ['Spoqa Han Sans Neo'],
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#333',
      white: '#ffffff',
      efefef: '#efefef',
      default: '#29396d',
      danger: '#e32c27',
      warning: '#fbc04b',
      success: '#4a6e52',
      cancel: '#aaa',
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
  corePlugin: {
    fontFamily: true,
  },
};
