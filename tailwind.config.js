module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'banner-img': "url('./assest/image/b.jpg')",
        
      }),

    },
  },
  plugins: [],
}