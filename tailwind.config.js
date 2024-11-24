/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['Zentry', 'sans-serif'],
        general: ['General', 'sans-serif'],
        'circular-web': ['Circular Web', 'sans-serif'],
        'robert-medium': ['Robert Medium', 'sans-serif'],
        'robert-regular': ['Robert Regular', 'sans-serif'],
        'Apocalypse': ['Apocalypse', 'sans-serif'],
      },
      colors: {
          'koila': {
            10: '#1A1A1A',
            20: '#333333',
            30: '#4D4D4D',
            40: '#666666',
            50: '#808080',
            60: '#999999',
            70: '#B3B3B3',
            80: '#CCCCCC',
            90: '#E6E6E6',
            100: '#F2F2F2',
          },
          'nimbu': {
            10: '#332E00',
            20: '#665C00',
            30: '#998900',
            40: '#CCB700',
            50: '#FFE500',
            60: '#FFEA33',
            70: '#FFEF66',
            80: '#FFF599',
            90: '#FFFACC',
            100: '#FFFCE5',
          },
          blue: {
            50: "#DFDFF0",
            75: "#dfdff2",
            100: "#F0F2FA",
            200: "#010101",
            300: "#4FB7DD",
          },
        },
      }
    },
  plugins: [],
}
