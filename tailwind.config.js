/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },

        fontSize: {
          'custom-xl': "18.93px",
          'custom-2xl': "22px",
          'custom-3xl': "25px",
          'custom-4xl': "35px",
          'custom-5xl': "40px",
          'custom-6xl': "70px",
        },
        lineHeight: {
          'custom-xl': "23.58px",
          'custom-2xl': "25.31px",
          'custom-3xl': "28.76px",
          'custom-4xl': "32.93px",
          'custom-5xl': "38.28px",
          'custom-6xl': "40.26px",
          'custom-7xl': "46.02px",
          'custom-8xl': "80.53px",
          'custom-9xl': "105px",
        },
        colors: {
          'purple': "#b62aff",
          'pink': "#ff0df2",
          'red': "#eb6f41",
          'dark-yellow': "#ffce41",
          'yellow': "#faf289",
          'green': "#a2d068",
          'sky-blue': "#a3dce6",
        },
        fontFamily: {
          'comic-neue': "'comic neue', sans-serif",
        },
      
      backgroundImage: {
        'roadmap': "url('/public/assets/images/png/roadmap-image.png')",
      },
     

    },
  },
  plugins: [],
}

