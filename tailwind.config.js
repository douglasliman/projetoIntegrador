/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-escuro": "#002343",
        "azul-escuro-hover": "#34618B",
        "azul-claro": "#28C0F6",
        "azul-claro-hover": "#76B8D0",
        "azul-sobre-nos": "#4077AA",
        "verde-medio": "#209B38",
        "verde-medio-hover": "#63AC71",
        "verde-claro": "#AAD32D",
        "verde-claro-hover": "#D8ED98",
        "verde-escuro": "#15561B",
        cinza: "#B7B5B5",
        white: "#ffffff",
       
      },
      backgroundImage: {
        "fundo-cadastros": "url('./src/assets/fundoCad.png')",
        "fundo-cadastros2": "url('./src/assets/fundoCad2.png')",
        "fundo-login": "url('./src/assets/fundologin.png')",
        "not-found": "url('./src/assets/abacate404.png')"
      },
    },
  },
  plugins: [],
};
