/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        light: '#D8D8D8',
        dark: '#2A2A2A',
        hoverColor: '#5f5f5f',
        hoverColorDark: '#999999',
        darkAlpha: '#2A2A2A91',
        mediaColor: '#3b3b3b'
      },
      width: {
        navHeight: '7rem',
        footerHeight: '20rem',
        sitebarWidth: '16rem'
      },
      boxShadow: {
        'nav': '0px 1px 10px black'
      },
      height: {
        '128': '30rem',
      },
      maxHeight: {
        '128': '40rem',
      },
      flex: {
        '1/2': '0 0 50%',
        '2/2': '0 0 100%',
      }
    },
  },
  plugins: []
}

