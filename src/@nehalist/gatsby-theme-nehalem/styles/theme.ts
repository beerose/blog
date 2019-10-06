const fontSizes = [16, 24, 48, 73];

const colors = {
  primary: "#f5d100", // candlelight
  secondary: "#035437", // sacramento state green
  smokyBlack: "#070707", // smoky black
  floralWhite: "#FCFCF9", // snow
  black08: "rgba(10, 10, 0, 0.8)",
};

export const theme = {
  fontSizes,
  colors,
  layout: {
    backgroundColor: colors.floralWhite,
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
