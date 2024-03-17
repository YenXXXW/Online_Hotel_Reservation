/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Siliguri: ["Hind Siliguri"],
        Cormorant: ["Cormorant Garamond"],
      },
      backgroundImage: {
        rooftop: "url('/src/assets/rooftop.jpg')",
      },
    },
  },
  plugins: [],
};
