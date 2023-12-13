module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: {
          50: "#e8effd",
          100: "#bad0f8",
          A700: "#1266f1",
          A100: "#8cb1f3",
        },
        green: { A700: "#00b74a" },
        black: {
          "900_00": "#00000000",
          "900_8c": "#0000008c",
          "900_0c": "#0000000c",
          "900_99": "#00000099",
          "900_71": "#00000071",
          "900_19": "#00000019",
          "900_35": "#00000035",
        },
        purple: { 900: "#44006b", A700: "#ad1fff" },
        blue_gray: {
          700: "#354f7e",
          800: "#2d446c",
          900: "#1e2d48",
          "900_01": "#1d2b44",
        },
        white: { A700_8c: "#ffffff8c", A700_e5: "#ffffffe5", A700: "#ffffff" },
        gray: {
          400: "#bdbdbd",
          600: "#757575",
          800: "#4f4f4f",
          "700_71": "#66666671",
        },
      },
      boxShadow: {
        bs1: "0px 1px  2px 0px #0000000c",
        bs3: "0px 4px  6px -2px #0000000c",
        bs4: "0px 10px  10px -5px #0000000c",
        bs: "0px 2px  10px 0px #00000019",
        bs5: "0px 2px  10px 0px #00000035",
        bs2: "0px 15px  30px 0px #00000035",
      },
      fontFamily: { roboto: "Roboto" },
      backgroundImage: {
        gradient: "radial-gradient(#354f7e,#2d446c,#1e2d48,#1d2b44,#00000000)",
        gradient1: "radial-gradient(#44006b,#ad1fff)",
        gradient2: "linear-gradient(180deg ,#00000071,#66666671,#00000071)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
