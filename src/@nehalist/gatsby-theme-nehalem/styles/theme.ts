const fontSizes = [16, 24, 48, 73];

const colors = {
  primary: "#F4D524", // deep lemon
  secondary: "#1A936F", // illuminating emerald
  smokyBlack: "#070707", // smoky black
  snow: "#FCFCF9", // snow
  black09: "rgba(25, 10, 0, 0.9)",
  shadow: "rgba(0, 0, 0, 0.05)",
};

export const theme = {
  fontSizes,
  colors,
  layout: {
    backgroundColor: colors.snow,
    primaryColor: colors.primary,
    linkColor: colors.secondary,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base:
      `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
  },
};

export default theme;
