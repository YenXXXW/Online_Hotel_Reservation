/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Siliguri: ["Hind Siliguri"],
        Cormorant: ["Cormorant Garamond"],
        Nunito: ["Nunito Sans", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        rooftop: "url('/src/assets/rooftop.jpg')",
      },
    },
  },
  plugins: [],
};
