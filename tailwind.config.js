const customColors = {
  accent_border: "#efd199",
  secondary: "#815400",
  primary: "#d78c00",
  accent_hover: "#ad7000",
  background_1: "#fbf4e6",
  background_2: "#f9edd6",
  background_3: "#f1e2af",
  background_hover: "#111111",
  text_900: "#100e00",
  text_700: "#65522e",
  text_500: "#9f875c",
  text_hover: "#eeeeee",
  text_accent: "#d78c00",
  shadow: "#111111",
  dark: {
    accent_border: "#102e66",
    secondary: "#7eabff",
    primary: "#2873ff",
    accent_hover: "#528fff",
    background_1: "#040b19",
    background_2: "#061229",
    background_3: "#0e1d50",
    background_hover: "#eeeeee",
    text_900: "#eff1ff",
    text_700: "#9aadd1",
    text_500: "#6078a3",
    text_hover: "#111111",
    text_accent: "#2873ff",
    shadow: "#eeeeee",
  },
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "toggle-shadow": `0 0 35px 1px ${customColors.primary}`,
        "dark-toggle-shadow": `0 0 35px 1px ${customColors.dark.primary}`,
      },
    },
    fontFamily: {
      "noto-sans": ["Noto Sans JP", "sans-serif"],
    },
    colors: {
      ...customColors,
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};
