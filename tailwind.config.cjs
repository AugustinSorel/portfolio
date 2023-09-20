/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",

        ring: "hsl(var(--ring))",

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      padding: {
        "max-width":
          "max(calc((100vw - var(--max-width-container)) / 2), 1.25rem)",
      },
      height: {
        header: "var(--header-height)",
      },
      margin: {
        "header-height": "var(--header-height)",
      },
    },
  },
  plugins: [],
};
