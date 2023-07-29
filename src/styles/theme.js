export const theme = Object.freeze({
  colors: {
    accent: '#f64f59',
    white: '#f2f2f2',
    light: 'rgba(255,255,255,.5)',
    dark: '#240b36',
    primary: '#22a6b3',
    mainBackground: ['linear-gradient(to top, #0f2027, #203a43, #2c5364)'],
    imageBackground: ['red', 'linear-gradient (90deg, #ff9966,#ff5e62'],
  },

  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },

  breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },

  animations: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  spacing: value => `${4 * value}px`,
});
