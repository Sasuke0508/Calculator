module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          'key-base': 'var(--color-text-key-base)',
          'key-accent-1': 'var(--color-text-key-accent-1)',
          'key-accent-2': 'var(--color-text-key-accent-2)',
          screen: 'var(--color-text-screen)',
        },
      },

      backgroundColor: {
        skin: {
          base: 'var(--color-fill-base)',
          screen: 'var(--color-fill-screen)',
          keypad: 'var(--color-fill-keypad)',
          'key-base': 'var(--color-fill-key-base)',
          'key-accent-1': 'var(--color-fill-key-accent-1)',
          'key-accent-2': 'var(--color-fill-key-accent-2)',
        },
      },

      boxShadow: {
        'key-base': '0px 4px var(--color-shadow-key-base)',
        'key-accent-1': '0px 4px var(--color-shadow-key-accent-1)',
        'key-accent-2': '0px 4px var(--color-shadow-key-accent-2)',
      },

      fontFamily: {
        Spartan: 'Spartan, sans-serif',
      }, 
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '20': '4rem',
        '144': '36rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
