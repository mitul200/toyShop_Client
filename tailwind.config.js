/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0069ff",

          secondary: "#00a400",

          accent: "#00a900",

          neutral: "#2f1c19",

          "base-100": "#fff9fc",

          info: "#00aaff",

          success: "#00a422",

          warning: "#ff5c00",

          error: "#f1424e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
