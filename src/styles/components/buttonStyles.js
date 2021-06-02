export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    donateButton: {
      fontSize: {base: "18px"},
      color: "#FFF",
      fontWeight: 'bold',
      height: '50px',
      my: 4
    },
    formSubmitButton: {
      fontSize: {base: "18px"},
      color: "#FFF",
      bgColor: "brand.500",
      fontWeight: 'bold',
      w: "100%",
      _hover: { bg: "brand.700", color: "#FFF" },
      py: 6
    }
  },
  // default values for `size` and `variant`
  defaultProps: {},
}

export const HeadingStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
  },
  // default values for `size` and `variant`
  defaultProps: {},
}