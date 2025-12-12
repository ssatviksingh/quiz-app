module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E6B7B",
        primaryLight: "#DFF6FB",
        accent: "#4AA3D6",
        bgStart: "#d3eef7",
        bgMid: "#cfeef9",
        bgEnd: "#e5fbff"
      },
      fontFamily: {
        serifHead: ["Playfair Display", "ui-serif", "serif"],
        inter: ["Inter", "ui-sans-serif", "system-ui"]
      },
      fontSize: {
        huge: ["96px", { lineHeight: "1.02", fontWeight: "700" }],
        hero: ["56px", { lineHeight: "1.03", fontWeight: "700" }]
      },
      borderRadius: {
        frame: "34px",
        card: "14px"
      },
      boxShadow: {
        frame: "0 40px 80px rgba(6,35,47,0.12)",
        card: "0 18px 40px rgba(6,35,47,0.06)",
        soft: "0 8px 18px rgba(6,35,47,0.04)"
      }
    }
  },
  plugins: []
}
