export const TextStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    heading1: {},
    headline2: {},
    headline3: {},
    heading: {
      color: "brand.500",
      fontSize: { base: "2xl", sm: "3xl" },
      fontWeight: 700,
    },
    paragraph: {
      color: "gray.900",
      fontSize: { base: "sm", sm: "md" },
      lineHeight: "1.5",
    },
    caption: {
      color: "gray.700",
      fontSize: { base: "sm" },
      lineHeight: "1.5",
    },
    overline: {},
    authorName: {
      color: "brand.500",
      fontSize: { base: "2xl", sm: "3xl" },
      fontWeight: 700,
    },
    authorTitle: {
      color: "gray.500",
      fontSize: { base: "md" },
      lineHeight: "1.2",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
};

export const HeadingStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
