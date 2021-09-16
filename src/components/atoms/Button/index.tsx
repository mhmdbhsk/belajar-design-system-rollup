import { styled } from "../../../config/stitches.config";

export const Button = styled("button", {
  backgroundColor: "transparent",
  appearance: "none",
  border: "none",
  borderRadius: "99999px",
  paddingLeft: "12px",
  paddingRight: "12px",
  cursor: "pointer",

  variants: {
    size: {
      default: {
        fontSize: "13px",
        height: "25px",
      },
      large: {
        fontSize: "15px",
        height: "35px",
      },
    },
    color: {
      gray: {
        backgroundColor: "Gainsboro",
        "&:hover": {
          backgroundColor: "DarkGray",
        },
      },
      purple: {
        backgroundColor: "BlueViolet",
        color: "white",
        "&:hover": {
          backgroundColor: "DarkViolet",
        },
      },
    },
    outlined: {
      true: {
        $$shadowColor: "transparent",
        backgroundColor: "transparent",
        boxShadow: "0 0 0 1px $$shadowColor",
      },
    },
  },

  defaultVariants: {
    color: "gray",
    size: "default",
  },

  compoundVariants: [
    {
      color: "purple",
      outlined: true,
      css: {
        $$shadowColor: "DarkViolet",
        color: "BlueViolet",
        "&:hover": {
          color: "white",
          backgroundColor: "DarkViolet",
        },
      },
    },
    {
      color: "gray",
      outlined: true,
      css: {
        $$shadowColor: "Gainsboro",
      },
    },
  ],
});
