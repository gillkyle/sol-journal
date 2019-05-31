// standardized role-based design tokens used throughout the whole app
// a name like lightGray doesn't make sense with themese when light
// and dark are possibile
const theme = {
  LIGHT: {
    name: "LIGHT",
    colors: {
      logo: "#344157",
      primary: "#2E3136",
      secondary: "#999",
      tertiary: "#C4C4C4",
      quarternary: "#EAEAEA",
      headerBackground: "#FAFBFC",
      bodyBackground: "#FFF",
      inputBackground: "#FAFBFC",
      hover: "hsla(233, 5%, 31%, 0.12)",
      button: "#f2f3f5",
    },
  },
  DARK: {
    name: "DARK",
    colors: {
      logo: "#EAEAEA",
      primary: "#F3F6F8",
      secondary: "#9Ba3B0",
      tertiary: "#6F7682",
      quarternary: "#3E4B62",
      headerBackground: "#272f3d",
      bodyBackground: "#262B34",
      inputBackground: "#272f3d",
      hover: "hsla(233, 100%, 96%, 0.12)",
      button: "#464d5d",
    },
  },
}

export default theme
