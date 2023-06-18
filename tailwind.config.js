/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sign-up": "url('/images/Toufukuji.jpg')",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        heading: ["Shippori Mincho", "serif"],
        cardHeading: ["Bebas Neue", "sans-serif"],
        catTags: ["Bebas Neue", "sans-serif"],
        roboto_condensed: ["var(--font-roboto-condensed)"],
        playfair_display: ["var(--font-playfair_display)"],
        krona_one: ["var(--font-krona_one)"],
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        smd: "830px",

        lg: "985px",
        // => @media (min-width: 1024px) { ... }

        xl: "1180px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1600px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1800px",

        "4xl": "1950px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#8C0327",

          secondary: "#D85251",

          accent: "#D59B6A",

          neutral: "#826A5C",

          "base-100": "#F1F1F1",

          info: "#003C3B",

          success: "#499380",

          warning: "#E97F14",

          error: "#DF1A2F",
        },
        // colors: {
        //   accentGreen: "#003C3B",
        //   // base: "#F1F1F1",
        // }
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
