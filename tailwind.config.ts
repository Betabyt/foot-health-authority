import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // EDU-FOOT Design System typefaces
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
        body:    ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono:    ['"Source Code Pro"', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light:      "hsl(var(--accent-green-light))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT:              "hsl(var(--sidebar-background))",
          foreground:           "hsl(var(--sidebar-foreground))",
          primary:              "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent:               "hsl(var(--sidebar-accent))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground))",
          border:               "hsl(var(--sidebar-border))",
          ring:                 "hsl(var(--sidebar-ring))",
        },
        // ── EDU-FOOT brand colours (exact hex) ─────────────────────────
        "edu-blue":        "#0072BC",
        "edu-dark-blue":   "#1A3A5C",
        "edu-light-blue":  "#E8F4FD",
        "edu-green":       "#4CAF50",
        "edu-dark-green":  "#2E7D32",
        "edu-light-green": "#E8F5E9",
        // ── Risk classification ─────────────────────────────────────────
        risk: {
          low:      "#4CAF50",
          moderate: "#FFC107",
          high:     "#FF9800",
          urgent:   "#F44336",
        },
        // ── Legacy tokens kept for existing component compat ───────────
        trust: {
          DEFAULT: "hsl(var(--trust-blue))",
          light:   "hsl(var(--trust-blue-light))",
        },
        gold: "hsl(var(--accent-gold))",
        stat: "hsl(var(--stat-bg))",
      },
      borderRadius: {
        // Design system: sm=4px, md=8px, lg=12px, full=9999px
        sm:   "4px",
        md:   "8px",
        lg:   "12px",
        xl:   "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.06)",
        md: "0 2px 8px rgba(0,0,0,0.08)",
        lg: "0 4px 16px rgba(0,0,0,0.12)",
      },
      spacing: {
        // Design system spacing scale (supplements Tailwind defaults)
        "ds-xs":  "4px",
        "ds-sm":  "8px",
        "ds-md":  "16px",
        "ds-lg":  "24px",
        "ds-xl":  "32px",
        "ds-2xl": "48px",
        "ds-3xl": "64px",
        "ds-4xl": "96px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "count-up":       "count-up 0.6s ease-out forwards",
        "fade-in":        "fade-in 0.5s ease-out forwards",
        "slide-up":       "slide-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
