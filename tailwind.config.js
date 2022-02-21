module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red'   : '#ff7a7a',
      'green' : '#38cc8c',
      'blue'  : '#6055a5',
      'dark'  : '#3e3c49',
      'gray'  : '#b9b6d3',

    },
    fontFamily: {
      'poppins' : ['Poppins']
    },

    backgroundImage: {
      'desktop' : "url('./intro-component-with-signup-form-master/images/bg-intro-desktop.png')",
      'mobile'  : "url('./intro-component-with-signup-form-master/images/bg-intro-mobile.png')"
    }
  },
  plugins: [],
}
