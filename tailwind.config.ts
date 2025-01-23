import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navbarHover': '#274C77',
        'navbarActive': '#6096BA',
        'backgroundColor': '#E7ECEF',
      },
    },
  },
  plugins: [],
} satisfies Config;
