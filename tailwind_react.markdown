

@EFTEKHER

1)
npm create vite@latest

2)
npm install -D tailwindcss postcss autoprefixer

3)
npx tailwindcss init -p


4)
tailwind config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


5)
index.css


@tailwind base;
@tailwind components;
@tailwind utilities;


6)

npm run dev

