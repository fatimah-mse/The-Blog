/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'inter': "Inter"
      },
      colors: {
        'dark-mood' : '#090D1F',
        'primary': '#1A1A1A',
        'secondary' : '#667085' ,
        'purple' : '#6941C6',
        'off-white' : '#F9F5FF',
        'baby-blue' : '#EEF4FF',
        'light-pink' : '#FDF2FA',
        'dark-blue' : '#3538CD',
        'dark-pink' : '#C11574',
        'mydark' : '#363F72',
        'mylight-blue' : '#F0F9FF',
        'mydark-blue' : '#026AA2',
        'light-orange' : '#FFF6ED',
        'dark-orange' : '#C4320A',
        'light-green' : '#ECFDF3',
        'dark-green' : '#027A48'
      },
      spacing: {
        '7.5': '1.875rem',
        '12.5' : '3.125rem',
        '13' : '3.375rem',
        '22' : '6rem',
        '26' : '426px',
      },
      width: {
        '88' : '360px'
      },
    },
  },
  plugins: [],
}

