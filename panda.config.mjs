import { defineTextStyles } from "@pandacss/dev";
import { defineConfig } from "@pandacss/dev";

const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.5,
    },
  },
  h3: {
    value: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: 1.5,
    },
  },
  "text-sm": {
    value: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  body: {
    value: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          white: { value: "#FFFFFF" },
          red: { value: "#FF3939" },
          purple: {
            100: { value: "#EFEBFF" },
            300: { value: "#BEADFF" },
            500: { value: "#633CFF" },
          },
          grey: {
            100: { value: "#FAFAFA" },
            300: { value: "#D9D9D9" },
            500: { value: "#737373" },
            700: { value: "#333333" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
