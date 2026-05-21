import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFEDD5 0%, #FDF2F8 100%)', // Subtle orange-pink
        'card-gradient': 'linear-gradient(to bottom right, rgba(255, 237, 213, 0.4), rgba(253, 242, 248, 0.4))',
      },
    },
  },
  plugins: [],
};
export default config;
