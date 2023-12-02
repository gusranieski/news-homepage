/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   'mobile': '375px',
    //   // => @media (min-width: 375px) { ... }

    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1440px',
    //   // => @media (min-width: 1440px) { ... }
    // },
    extend: {
      colors: {
        SoftOrange: "hsl(35, 77%, 62%)",
        SoftRed: "hsl(5, 85%, 63%)",
        OffWhite: "hsl(36, 100%, 99%)",
        GrayishBlue: "hsl(233, 8%, 79%)",
        DarkGrayishBlue: "hsl(236, 13%, 42%)",
        VeryDarkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
