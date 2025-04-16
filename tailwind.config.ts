import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        rn: "12px 12px 12px #E6E6E6, -10px -10px 10px #FFFFFF",
        "rn-hover": "12px 12px 12px #E6E6E6 inset, -10px -10px 10px #FFFFFF inset",
        "rn-3d": "12px 12px 12px #E6E6E6, -10px -10px 10px #FFFFFF, 6px 6px 6px #E6E6E6 inset, -4px -4px 6px #FFFFFF inset",
        "rn-3d-hover": "12px 12px 12px #E6E6E6 inset, -10px -10px 10px #FFFFFF inset, 6px 6px 6px #E6E6E6 inset, -4px -4px 6px #FFFFFF inset",
      
        "dark-rn": "12px 12px 12px hsl(217, 30%, 12%), -10px -10px 10px hsl(217, 30%, 22%)",
        "dark-rn-hover": "12px 12px 12px hsl(217, 30%, 12%) inset, -10px -10px 10px hsl(217, 30%, 22%) inset",
        "dark-rn-3d": "12px 12px 12px hsl(217, 30%, 12%), -10px -10px 10px hsl(217, 30%, 22%), 6px 6px 6px hsl(217, 30%, 12%) inset, -4px -4px 6px hsl(217, 30%, 22%) inset",
        "dark-rn-3d-hover": "12px 12px 12px hsl(217, 30%, 12%) inset, -10px -10px 10px hsl(217, 30%, 22%) inset, 6px 6px 6px hsl(217, 30%, 12%) inset, -4px -4px 6px hsl(217, 30%, 22%) inset",
      },
      
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".container-rn": {
          "box-sizing": "border-box",
          "width": "100%",
          "max-width": "100vw",
          "overflow-x": "hidden",
          "padding-left": "10px",
          "padding-right": "10px",
          "@screen md": {
            "padding-left": "40px",
            "padding-right": "40px",
          },
          "@screen lg": {
            "padding-left": "100px",
            "padding-right": "100px",
          },
          "@screen xl": {
            "padding-left": "150px",
            "padding-right": "150px",
          },
          "@screen 2xl": {
            "padding-left": "200px",
            "padding-right": "200px",
          },
        },
      });
    },
  ],
} satisfies Config;